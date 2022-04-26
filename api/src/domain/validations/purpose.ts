import { InvalidPurposeError } from '@/domain/errors'
import { Either, left, right } from '@/shared'

export class Purpose {
  private constructor(private readonly purpose: string) {
    Object.freeze(this)
  }

  public static create(purpose: string): Either<InvalidPurposeError, Purpose> {
    if (!Purpose.isValid(purpose)) {
      return left(new InvalidPurposeError(purpose))
    }

    return right(new Purpose(purpose))
  }

  public static isValid(purpose: string): boolean {
    if (!purpose) {
      return false
    }

    const purposeWithoutSpaces = purpose.replace(/\s/g, '')

    if (purposeWithoutSpaces.length < 12 || purposeWithoutSpaces.length > 256) {
      return false
    }

    return true
  }

  get value(): string {
    return this.purpose
  }
}
