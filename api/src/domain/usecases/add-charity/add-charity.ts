import { CharityData } from '@/domain/entities'
import { AddCharityResponse } from '@/domain/usecases'

export interface AddCharity {
  add(charityData: CharityData): Promise<AddCharityResponse>
}
