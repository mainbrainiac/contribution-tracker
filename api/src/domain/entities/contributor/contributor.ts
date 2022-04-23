import { Either, left, right } from '@/shared'
import { InvalidEmailError, InvalidNameError } from '@/domain/errors'
import { Email, Name, Password, Amount } from '@/domain/entities'

export namespace Contributor {
  export type params = {
    name: string
    email: string
    password: string
    amount: number
  }
}

export class Contributor {
  private constructor(public readonly name: Name, public readonly email: Email, public readonly password: Password, public readonly amount: Amount) {
    Object.freeze(this)
  }

  public static create(contributorParams: Contributor.params): Either<InvalidEmailError | InvalidNameError, Contributor> {
    const nameOrError = Name.create(contributorParams.name)

    if(nameOrError.isLeft()) {
      return left(nameOrError.value)
    }
    
    const emailOrError = Email.create(contributorParams.email)

    if(emailOrError.isLeft()) {
      return left(emailOrError.value)
    }

    const passwordOrError = Password.create(contributorParams.password)

    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value)
    }

    const amountOrError  = Amount.create(contributorParams.amount)

    if (amountOrError.isLeft()) {
      return left(amountOrError.value)
    }

    const name: Name = nameOrError.value
    const email: Email = emailOrError.value
    const password: Password = passwordOrError.value
    const amount: Amount = amountOrError.value

    return right(new Contributor(
      name,
      email,
      password,
      amount
    ))
  }

  
}