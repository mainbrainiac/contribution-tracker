import { Charity, CharityData } from '@/domain/entities'
import { AddCharity, AddCharityResponse } from '@/domain/usecases'
import { left, right } from '@/shared'
import { ICharityRepository } from '@/app/contracts'
import { CharityAlreadyExistsError } from '@/app/errors'

export class AddCharityService implements AddCharity {
  constructor(private readonly charityRepository: ICharityRepository) {}

  async add(charityData: CharityData): Promise<AddCharityResponse> {
    const charityOrError = Charity.create(charityData)

    if (charityOrError.isLeft()) {
      return left(charityOrError.value)
    }

    const exists = await this.charityRepository.exists(charityData.name)

    if (exists) {
      return left(new CharityAlreadyExistsError(charityData.name))
    }

    await this.charityRepository.add(charityData)

    return right(charityOrError.value)
  }
}
