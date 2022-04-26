import { CharityModel } from '@/app/models'
import { CharityData } from '@/domain/entities'

export interface CharityRepository {
  add(charityData: CharityData): Promise<CharityModel>
  exists(name: string): Promise<boolean>
}
