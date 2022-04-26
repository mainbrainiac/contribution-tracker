import { Name, Purpose, TotalCollected, Id } from '@/domain/validations'
import {
  InvalidIdError,
  InvalidNameError,
  InvalidPurposeError,
  InvalidTotalCollectedError
} from '@/domain/errors'
import { Either, left, right } from '@/shared'

export type CharityData = {
  id: string
  name: string
  purpose: string
  totalCollected: number
}

export class Charity {
  constructor(
    public readonly id: Id,
    public readonly name: Name,
    public readonly purpose: Purpose,
    public readonly totalCollected: TotalCollected
  ) {
    Object.freeze(this)
  }

  public static create(
    charityData: CharityData
  ): Either<
    | InvalidNameError
    | InvalidPurposeError
    | InvalidTotalCollectedError
    | InvalidIdError,
    Charity
  > {
    const idOrError = Id.create(charityData.id)

    if (idOrError.isLeft()) {
      return left(idOrError.value)
    }

    const nameOrError = Name.create(charityData.name)

    if (nameOrError.isLeft()) {
      return left(nameOrError.value)
    }

    const purposeOrError = Purpose.create(charityData.purpose)

    if (purposeOrError.isLeft()) {
      return left(purposeOrError.value)
    }

    const totalCollectedOrError = TotalCollected.create(
      charityData.totalCollected
    )

    if (totalCollectedOrError.isLeft()) {
      return left(totalCollectedOrError.value)
    }

    const id: Id = idOrError.value
    const name: Name = nameOrError.value
    const purpose: Purpose = purposeOrError.value
    const totalCollected: TotalCollected = totalCollectedOrError.value

    return right(new Charity(id, name, purpose, totalCollected))
  }
}
