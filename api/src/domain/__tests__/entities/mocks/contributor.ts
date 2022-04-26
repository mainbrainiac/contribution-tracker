import { ContributorData } from "@/domain/entities";

import faker from 'faker'

export const validContributorData = (): ContributorData => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName() + faker.name.lastName(),
  email: faker.internet.email(),
  password: 'validPassword99',
  totalDonated: 1
})

export const invalidContributorData = (): ContributorData => ({
  id: faker.lorem.word(),
  name: '',
  email: '',
  password: '',
  totalDonated: 1
})