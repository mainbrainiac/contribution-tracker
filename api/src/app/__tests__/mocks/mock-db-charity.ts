import { ICharityRepository } from '@/app/contracts'
import { CharityData } from '@/domain/entities'
import { CharityModel } from '@/app/models'

export class CharityRepositorySpy implements ICharityRepository {
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

  public findByIdCalledWith: string

  public async findById(id: string): Promise<CharityModel> {
    this.findByIdCalledWith = id

    const findByIdReturnValue: CharityModel = {
      id,
      name: 'name',
      totalCollected: 0,
      purpose: 'purpose',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return findByIdReturnValue
  }

  public updateTotalCollectedCalledWithId: string
  public updatedTotalCollectedCalledWithTotalCollected: number
  x
  public async updateTotalCollected(
    id: string,
    totalCollected: number
  ): Promise<CharityModel> {
    this.updateTotalCollectedCalledWithId = id
    this.updatedTotalCollectedCalledWithTotalCollected = totalCollected

    const updateTotalCollectedReturnValue: CharityModel = {
      id,
      name: 'name',
      totalCollected,
      purpose: 'purpose',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return updateTotalCollectedReturnValue
  }
}
