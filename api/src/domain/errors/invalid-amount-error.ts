export class InvalidAmountError extends Error {
  constructor(amount: number) {
    super(`Invalid amount: ${amount}`)
  }
}