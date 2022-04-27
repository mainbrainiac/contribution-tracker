import { DonationData } from '@/domain/entities'

import faker from 'faker'

export const validDonationData = (): DonationData => ({
  id: faker.datatype.uuid(),
  charityId: faker.datatype.uuid(),
  contributorId: faker.datatype.uuid(),
  totalDonated: 100
})

export const invalidDonationData = (): DonationData => ({
  id: faker.lorem.word(),
  charityId: faker.lorem.word(),
  contributorId: faker.lorem.word(),
  totalDonated: 0
})
