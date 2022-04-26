import { CharityRepository } from '@/app/contracts'
import { CharityData } from '@/domain/entities'
import { CharityModel } from '@/app/models'

export class CharityRepositorySpy implements CharityRepository {
  public addCharityCalledWith: CharityData

  public async add(charityData: CharityData): Promise<CharityModel> {
    this.addCharityCalledWith = charityData

    const addCharityReturnValue: CharityModel = {
      ...charityData,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    return addCharityReturnValue
  }

  public existsCalledWith: string

  public async exists(name: string): Promise<boolean> {
    this.existsCalledWith = name

    const existsReturnValue = false

    return existsReturnValue
  }
}
