import { InvalidTotalDonatedError } from '@/domain/errors'
import { Either, left, right } from '@/shared'

export class TotalDonated {
  private constructor(private readonly totalDonated: number) {
    Object.freeze(this)
  }

  public static create(
    totalDonated: number
  ): Either<InvalidTotalDonatedError, TotalDonated> {
    if (!TotalDonated.isValid(totalDonated)) {
      return left(new InvalidTotalDonatedError(totalDonated))
    }

    return right(new TotalDonated(totalDonated))
  }

  public static isValid(totalDonated: number): boolean {
    if (!totalDonated) {
      return false
    }

    if (totalDonated < 0) {
      return false
    }

    return true
  }

  get value(): number {
    return this.totalDonated
  }
}
