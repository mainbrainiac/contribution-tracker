import { ICharityRepository } from '@/app/contracts'
import { CharityModel } from '@/app/models'
import { CharityData } from '@/domain/entities'
import { charities } from '@/infra/fake/data-sources/charity'

export class CharityRepository implements ICharityRepository {
  async add(charityData: CharityData): Promise<CharityModel> {
    const charity = {
      id: charityData.id,
      name: charityData.name,
      purpose: charityData.purpose,
      totalCollected: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    charities.push(charity)
    return charity
  }

  async exists(name: string): Promise<boolean> {
    return charities.some((charity) => charity.name === name)
  }

  async findById(id: string): Promise<CharityModel> {
    return charities.find((charity) => charity.id === id)
  }

  async updateTotalCollected(
    id: string,
    totalCollected: number
  ): Promise<CharityModel> {
    const charity = await this.findById(id)
    if (!charity) {
      return undefined
    }
    charity.totalCollected = totalCollected
    return charity
  }
}
