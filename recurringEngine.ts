export interface RecurringPayment {
  recipient: string;
  amount: number;
  interval: "daily" | "weekly" | "monthly";
}

export async function createRecurringPayment(
  payment: RecurringPayment
) {
  return {
    success: true,
    ...payment,
    status: "active"
  };
}
