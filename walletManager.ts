import { Connection } from "@solana/web3.js";

export const connection = new Connection(
  process.env.NEXT_PUBLIC_RPC!
);

export async function connectWallet() {
  return {
    connected: true
  };
}
