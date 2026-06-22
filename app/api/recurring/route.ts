import { NextResponse } from "next/server";
import { createRecurringPayment } from "@/recurringEngine";

export async function POST(req: Request) {
  const body = await req.json();

  const payment = await createRecurringPayment(body);

  return NextResponse.json(payment);
}
