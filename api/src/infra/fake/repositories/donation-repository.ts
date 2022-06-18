import { IDonationRepository } from '@/app/contracts'
import { DonationModel } from '@/app/models'
import { DonationData } from '@/domain/entities'
import { donations } from '@/infra/fake/data-sources'

export class DonationRepository implements IDonationRepository {
  async add(donationData: DonationData): Promise<DonationModel> {
    const donation = {
      id: donationData.id,
      charityId: donationData.charityId,
      contributorId: donationData.contributorId,
      totalDonated: donationData.totalDonated,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    donations.push(donation)
    return donation
  }
}
