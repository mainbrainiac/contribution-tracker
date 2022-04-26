import { ContributorRepository } from '@/app/contracts'
import { ContributorData } from '@/domain/entities'
import { ContributorModel } from '@/app/models'

export class ContributorRepositorySpy implements ContributorRepository {
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
}
