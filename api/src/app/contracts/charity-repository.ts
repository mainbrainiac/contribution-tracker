import { CharityModel } from '@/app/models'
import { CharityData } from '@/domain/entities'

export interface ICharityRepository {
  add(charityData: CharityData): Promise<CharityModel>
  exists(name: string): Promise<boolean>
  findById(id: string): Promise<CharityModel>
  updateTotalCollected(id: string, totalCollected: number): Promise<CharityModel>
}
