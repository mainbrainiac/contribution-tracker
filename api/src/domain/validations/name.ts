import { Either, left, right } from '@/shared'
import { InvalidNameError } from '@/domain/errors'

export class Name {
  private constructor(private readonly name: string) {
    Object.freeze(this)
  }

  public static create(name: string): Either<InvalidNameError, Name> {
    if (!Name.isValid(name)) {
      return left(new InvalidNameError(name))
    }

    return right(new Name(name))
  }

  public static isValid(name: string): boolean {
    if (!name) {
      return false
    }

    const nameWithoutSpaces = name.replace(/\s/g, '')

    if (nameWithoutSpaces.length < 3 || nameWithoutSpaces.length > 64) {
      return false
    }

    return true
  }

  get value(): string {
    return this.name
  }
}
