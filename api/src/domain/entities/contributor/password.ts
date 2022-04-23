import { Either, left, right } from "@/shared";
import { InvalidPasswordError } from "@/domain/errors";

export class Password {
  private constructor(private readonly password: string) {
    Object.freeze(this)
  }

  public static create(password: string): Either<InvalidPasswordError, Password> {
    if(!Password.isValid(password)) {
      return left(new InvalidPasswordError(password))
    }

    return right(new Password(password))
  }

  public static isValid(password: string): boolean {

    if (!password) {
      return false
    }

    const passwordWithoutSpaces = password.replace(/\s/g, '')

    if (passwordWithoutSpaces.length < 6 || passwordWithoutSpaces.length > 64) {
      return false
    }

    const hasUpperCase = /[A-Z]/.test(passwordWithoutSpaces)

    if (!hasUpperCase) {
      return false
    }

    const hasNumber = /[0-9]/.test(passwordWithoutSpaces)

    if (!hasNumber) {
      return false
    }

    return true
  }

  get value(): string {
    return this.password
  }
}