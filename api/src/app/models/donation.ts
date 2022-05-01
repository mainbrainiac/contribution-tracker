import { DonationData } from '@/domain/entities'

export interface DonationModel extends DonationData {
  createdAt: Date
  updatedAt: Date
}
