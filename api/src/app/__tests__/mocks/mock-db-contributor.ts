import { IContributorRepository } from '@/app/contracts'
import { ContributorData } from '@/domain/entities'
import { ContributorModel } from '@/app/models'

export class ContributorRepositorySpy implements IContributorRepository {
  public addContributorCalledWith: ContributorData

  public async add(charityData: ContributorData): Promise<ContributorModel> {
    this.addContributorCalledWith = charityData

    const addContributorReturnValue: ContributorModel = {
      ...charityData,
      updatedAt: new Date(),
      createdAt: new Date()
    }

    return addContributorReturnValue
  }

  public existsCalledWith: string

  public async exists(name: string): Promise<boolean> {
    this.existsCalledWith = name

    const existsReturnValue = false

    return existsReturnValue
  }

  public findByIdCalledWith: string

  public async findById(id: string): Promise<ContributorModel> {
    this.findByIdCalledWith = id

    const findByIdReturnValue: ContributorModel = {
      id,
      name: 'name',
      email: 'email',
      password: 'password',
      totalDonated: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return findByIdReturnValue
  }

  public updateTotalDonatedCalledWithId: string
  public updateTotalDonatedCalledWithTotalDonated: number

  public async updateTotalDonated(id: string, totalDonated: number): Promise<ContributorModel> {
    this.updateTotalDonatedCalledWithId = id;
    this.updateTotalDonatedCalledWithTotalDonated = totalDonated;

    const updateTotalDonatedReturnValue: ContributorModel = {
      id,
      name: 'name',
      email: 'email',
      password: 'password',
      totalDonated,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return updateTotalDonatedReturnValue
  }
}
