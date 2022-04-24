import { Contributor } from "@/domain/entities";

import faker from 'faker'

export const validContributorParams = (): Contributor.params => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName() + faker.name.lastName(),
  email: faker.internet.email(),
  password: 'validPassword99',
  totalDonated: 1
})

export const invalidContributorParams = (): Contributor.params => ({
  id: faker.lorem.word(),
  name: '',
  email: '',
  password: '',
  totalDonated: 1
})