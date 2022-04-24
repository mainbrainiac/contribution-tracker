import { Charity } from "@/domain/entities";

import faker from 'faker'

export const validCharityParams = (): Charity.params => ({
  name: faker.company.companyName(),
  purpose: faker.lorem.paragraph(),
  totalCollected: faker.datatype.number({ min: 1, max: 100 }),
})

export const invalidCharityParams = (): Charity.params => ({
  name: null,
  purpose: 'invalid purpose',
  totalCollected: -100,
})