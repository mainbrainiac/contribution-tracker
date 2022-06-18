import { ContributorData } from '@/domain/entities'
import { ContributorModel } from '@/app/models'

export interface IContributorRepository {
  add(contributorData: ContributorData): Promise<ContributorModel>
  exists(name: string): Promise<boolean>
  findById(id: string): Promise<ContributorModel>
  updateTotalDonated(
    id: string,
    totalDonated: number
  ): Promise<ContributorModel>
}
