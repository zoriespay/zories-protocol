export function totalVolume(
  transactions: number[]
) {
  return transactions.reduce(
    (a, b) => a + b,
    0
  );
}
