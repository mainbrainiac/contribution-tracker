import { MakeDonate, MakeDonateParams, MakeDonateResponse } from "@/domain/usecases";
import { ICharityRepository, IContributorRepository, IDonationRepository } from "@/app/contracts";
import { CharityDontExistsError, ContributorDontExistsError } from "../errors";
import { left, right } from "@/shared";
import { Donation } from "@/domain/entities";

export class MakeDonateService implements MakeDonate {
  constructor(
    private readonly charityRepository: ICharityRepository, 
    private readonly contributorRepository: IContributorRepository,
    private readonly donationRepository: IDonationRepository
  ) {}

  async donate(donateParams: MakeDonateParams): Promise<MakeDonateResponse> {
    const charity = await this.charityRepository.findById(donateParams.charityId)

    if (!charity) {
      return left(new CharityDontExistsError(donateParams.charityId))
    }

    const contributor = await this.contributorRepository.findById(donateParams.contributorId)

    if (!contributor) {
      return left(new ContributorDontExistsError(donateParams.contributorId))
    }

    const donationOrError = Donation.create(donateParams)

    if (donationOrError.isLeft()) {
      return left(donationOrError.value)
    }

    await this.donationRepository.add({
      id: donationOrError.value.id.value,
      charityId: charity.id,
      contributorId: contributor.id,
      totalDonated: donationOrError.value.totalDonated.value
    })


    await this.contributorRepository.updateTotalDonated(contributor.id, donationOrError.value.totalDonated.value)
    await this.charityRepository.updateTotalCollected(charity.id, donationOrError.value.totalDonated.value)

    return right(donationOrError.value)
  }
}