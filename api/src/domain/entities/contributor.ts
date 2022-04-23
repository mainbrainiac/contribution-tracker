import { Either, left } from '@/shared'
import { InvalidEmailError, InvalidNameError } from '@/domain/errors'
import { Email, Name } from '@/domain/entities'

namespace Contributor {
  export type params = {
    name: string
    email: string
    password: string
    amount: number
  }
}

export class Contributor {
  private constructor(public readonly name: string, public readonly email: string, public readonly password: string, public readonly amount: number) {
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

    return
  }

  
}