import { Contributor } from "@/domain/entities";

import faker from 'faker'

export const validContributorParams = (): Contributor.params => ({
  name: faker.name.firstName() + faker.name.lastName(),
  email: faker.internet.email(),
  password: 'validPassword99',
  amount: 1
})

export const invalidContributorParams = (): Contributor.params => ({
  name: '',
  email: '',
  password: '',
  amount: 1
})