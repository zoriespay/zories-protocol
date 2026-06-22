export async function executeTransaction(
  amount: number
) {
  return {
    amount,
    status: "confirmed"
  };
}
