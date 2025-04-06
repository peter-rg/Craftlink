// app/api/mpesa/stkpush/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, generateTimestamp, generatePassword } from "@/lib/mpesa";

export async function POST(req: NextRequest) {
  const { phone, amount } = await req.json();

  const accessToken = await getAccessToken();
  const timestamp = generateTimestamp();
  const password = generatePassword(timestamp);

  const res = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: "CraftLink",
      TransactionDesc: "CraftLink order payment",
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
