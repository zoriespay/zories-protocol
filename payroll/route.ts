import { NextResponse } from "next/server";
import { processPayroll } from "@/payrollEngine";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json(
    processPayroll(body.employees)
  );
}
