import { InvalidTotalDonatedError } from '@/domain/errors'
import { Either, left, right } from '@/shared'

export class TotalCollected {
  private constructor(private readonly totalCollected: number) {
    Object.freeze(this)
  }

  public static create(
    totalCollected: number
  ): Either<InvalidTotalDonatedError, TotalCollected> {
    if (!TotalCollected.isValid(totalCollected)) {
      return left(new InvalidTotalDonatedError(totalCollected))
    }

    return right(new TotalCollected(totalCollected))
  }

  public static isValid(totalCollected: number): boolean {
    if (!totalCollected) {
      return false
    }

    if (totalCollected < 0) {
      return false
    }

    return true
  }

  get value(): number {
    return this.totalCollected
  }
}
