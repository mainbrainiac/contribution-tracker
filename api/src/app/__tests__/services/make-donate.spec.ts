import { MakeDonateService } from "@/app/services"
import { CharityRepositorySpy, ContributorRepositorySpy, DonationRepositorySpy } from "@/app/__tests__/mocks"
import { Donation } from "@/domain/entities"

import faker from 'faker'

describe('MakeDonateService', () => {
  it ('should return new donation entity on success', async () => {
    const makeDonateService = new MakeDonateService(
      new CharityRepositorySpy(),
      new ContributorRepositorySpy(),
      new DonationRepositorySpy()
    )

    const donateParams = {
      charityId: faker.datatype.uuid(),
      contributorId: faker.datatype.uuid(),
      totalDonated: 123
    }

    const response = await makeDonateService.donate(donateParams)

    expect(response.value).toBeInstanceOf(Donation)
  })
})