import { ContributorData } from '@/domain/entities'
import { AddContributorResponse } from '@/domain/usecases'

export interface AddContributor {
  add(contributorData: ContributorData): Promise<AddContributorResponse>
}
