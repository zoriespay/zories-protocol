export interface Subscription {
  merchant: string;
  amount: number;
}

export async function activateSubscription(
  subscription: Subscription
) {
  return {
    active: true,
    ...subscription
  };
}
