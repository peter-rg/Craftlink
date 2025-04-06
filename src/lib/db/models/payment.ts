// models/Payment.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPayment extends Document {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResultCode: number;
  ResultDesc: string;
  MpesaReceiptNumber?: string;
  Amount?: number;
  PhoneNumber?: string;
  Timestamp: Date;
}

const PaymentSchema: Schema = new Schema({
  MerchantRequestID: { type: String },
  CheckoutRequestID: { type: String },
  ResultCode: { type: Number },
  ResultDesc: { type: String },
  MpesaReceiptNumber: { type: String },
  Amount: { type: Number },
  PhoneNumber: { type: String },
  Timestamp: { type: Date },
});

export default (mongoose.models.Payment as Model<IPayment>) ||
  mongoose.model<IPayment>("Payment", PaymentSchema);
