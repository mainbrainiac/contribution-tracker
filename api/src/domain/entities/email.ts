import { InvalidEmailError } from "@/domain/errors"
import { Either, left, right } from "@/shared"

export class Email {
  private readonly email: string

  private constructor(email: string) {
    this.email = email
    Object.freeze(this)
  }

  public static create(email: string): Either<InvalidEmailError, Email> {
    if (!Email.isValid(email)) {
      throw left(new InvalidEmailError(email))
    }

    return right(new Email(email))
  }

  public static isValid(email: string): boolean {
    const regexValidateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email) {
      return false
    }

    if (email.length > 256) {
      return false
    }

    if(!regexValidateEmail.test(email)) {
      return false
    }

    const [account, address] = email.split('@')

    if (account.length > 64) {
      return false
    }

    const domainParts = address.split('.')

    if (domainParts.some(part => part.length > 63)) {
      return false
    }

    return true;
  }

  get value(): string {
    return this.email
  }
}