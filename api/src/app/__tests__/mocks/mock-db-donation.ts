import { IDonationRepository } from '@/app/contracts'
import { DonationModel } from '@/app/models'
import { DonationData } from '@/domain/entities'

export class DonationRepositorySpy implements IDonationRepository {
  public addDonationCalledWith: DonationData

  public async add(donationData: DonationData): Promise<DonationModel> {
    this.addDonationCalledWith = donationData

    const addDonationReturnValue: DonationModel = {
      ...donationData,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    return addDonationReturnValue
  }
}
