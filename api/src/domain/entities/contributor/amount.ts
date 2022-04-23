import { InvalidAmountError } from "@/domain/errors"
import { Either, left, right } from "@/shared"

export class Amount {
  
  private constructor(private readonly amount: number) {
    Object.freeze(this)
  }

  public static create(amount: number): Either<InvalidAmountError, Amount> {
    if (!Amount.isValid(amount)) {
      return left(new InvalidAmountError(amount))
    }

    return right(new Amount(amount))
  }

  public static isValid(amount: number): boolean {
    if (!amount) {
      return false
    }

    if (amount < 0) {
      return false
    }

    return true
  }

  get value(): number {
    return this.amount
  }
}