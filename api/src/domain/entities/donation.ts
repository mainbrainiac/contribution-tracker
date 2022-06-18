import { Either, left, right } from '@/shared'
import { InvalidEmailError, InvalidNameError } from '@/domain/errors'
import { Id, TotalDonated } from '@/domain/validations'

export type DonationData = {
  id?: string
  charityId: string
  contributorId: string
  totalDonated: number
}

export class Donation {
  private constructor(
    public readonly id: Id,
    public readonly charityId: Id,
    public readonly contributorId: Id,
    public readonly totalDonated: TotalDonated
  ) {
    Object.freeze(this)
  }

  public static create(
    donationData: DonationData
  ): Either<InvalidEmailError | InvalidNameError, Donation> {
    const idOrError = Id.create(donationData.id)

    if (idOrError.isLeft()) {
      return left(idOrError.value)
    }

    const charityIdOrError = Id.create(donationData.charityId)

    if (charityIdOrError.isLeft()) {
      return left(charityIdOrError.value)
    }

    const contributorIdOrError = Id.create(donationData.contributorId)

    if (contributorIdOrError.isLeft()) {
      return left(contributorIdOrError.value)
    }

    const totalDonatedOrError = TotalDonated.create(donationData.totalDonated)

    if (totalDonatedOrError.isLeft()) {
      return left(totalDonatedOrError.value)
    }

    const id: Id = idOrError.value
    const charityId: Id = charityIdOrError.value
    const contributorId: Id = contributorIdOrError.value
    const totalDonated: TotalDonated = totalDonatedOrError.value

    return right(new Donation(id, charityId, contributorId, totalDonated))
  }
}
