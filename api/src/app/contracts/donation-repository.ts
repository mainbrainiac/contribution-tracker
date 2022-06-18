import { DonationData } from '@/domain/entities'
import { DonationModel } from '@/app/models'

export interface IDonationRepository {
  add(donationData: DonationData): Promise<DonationModel>
}
