// lib/mpesa.ts
export async function getAccessToken(): Promise<string> {
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");
  
    const res = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
  
    const data = await res.json();
    return data.access_token;
  }
  
  export function generateTimestamp(): string {
    const now = new Date();
    return now
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .slice(0, 14); // Format: YYYYMMDDHHMMSS
  }
  
  export function generatePassword(timestamp: string): string {
    const shortcode = process.env.MPESA_SHORTCODE!;
    const passkey = process.env.MPESA_PASSKEY!;
    const dataToEncode = `${shortcode}${passkey}${timestamp}`;
    return Buffer.from(dataToEncode).toString("base64");
  }
  