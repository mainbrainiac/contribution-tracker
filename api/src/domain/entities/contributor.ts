import { Either, left, right } from '@/shared'
import { InvalidEmailError, InvalidNameError } from '@/domain/errors'
import { Email, Name, Password, TotalDonated } from '@/domain/validations'

export namespace Contributor {
  export type params = {
    name: string
    email: string
    password: string
    totalDonated: number
  }
}

export class Contributor {
  
  private constructor(public readonly name: Name, public readonly email: Email, public readonly password: Password, public readonly totalDonated: TotalDonated) {
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

    const totalDonatedOrError  = TotalDonated.create(contributorParams.totalDonated)

    if (totalDonatedOrError.isLeft()) {
      return left(totalDonatedOrError.value)
    }

    const name: Name = nameOrError.value
    const email: Email = emailOrError.value
    const password: Password = passwordOrError.value
    const totalDonated: TotalDonated = totalDonatedOrError.value

    return right(new Contributor(
      name,
      email,
      password,
      totalDonated
    ))
  }

  
}