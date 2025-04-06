import Order from '@/lib/db/models/order.model'
import payment from '@/lib/db/models/payment'
import dbConnect from '@/lib/db/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const body = await req.json()
    console.log('MPESA CALLBACK:', JSON.stringify(body, null, 2))

    const stkCallback = body.Body?.stkCallback
    if (!stkCallback) {
      return NextResponse.json({ ResultCode: 1, ResultDesc: 'Invalid callback structure' })
    }

    const items = stkCallback.CallbackMetadata?.Item || []
    const getItemValue = (name: string) => {
      const item = items.find((i: { Name: string; Value: any }) => i.Name === name)
      return item ? item.Value : undefined
    }

    const checkoutRequestID = stkCallback.CheckoutRequestID

    const paymentData = {
      MerchantRequestID: stkCallback.MerchantRequestID,
      CheckoutRequestID: checkoutRequestID,
      ResultCode: stkCallback.ResultCode,
      ResultDesc: stkCallback.ResultDesc,
      MpesaReceiptNumber: getItemValue('MpesaReceiptNumber'),
      Amount: getItemValue('Amount'),
      PhoneNumber: getItemValue('PhoneNumber'),
      Timestamp: new Date(),
    }

    // Save to payments collection
    const paymentRecord = new payment(paymentData)
    await paymentRecord.save()

    // ✅ APPROVE ORDER IF MPESA WAS SUCCESSFUL
    if (stkCallback.ResultCode === 0) {
      const order = await Order.findOne({ 'paymentResult.id': checkoutRequestID })

      if (order && !order.isPaid) {
        order.isPaid = true
        order.paidAt = new Date()
        order.paymentResult = {
          id: checkoutRequestID,
          status: 'COMPLETED',
          pricePaid: String(getItemValue('Amount')),
          email_address: '', // optional if you want to store
        }
        await order.save()
        console.log('✅ Order updated successfully after M-Pesa payment')
      }
    }

    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' })
  } catch (error) {
    console.error('Callback error:', error)
    return NextResponse.json({ ResultCode: 1, ResultDesc: 'Internal server error' })
  }
}
