import { MakeDonateResponse } from '@/domain/usecases'

export type MakeDonateParams = {
  charityId: string
  contributorId: string
  totalDonated: number
}

export interface MakeDonate {
  donate(donateParams: MakeDonateParams): Promise<MakeDonateResponse>
}
