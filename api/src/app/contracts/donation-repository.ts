import { DonationData } from '@/domain/entities'
import { DonationModel } from '@/app/models'

export interface DonationRepository {
  add(donationData: DonationData): Promise<DonationModel>
}
