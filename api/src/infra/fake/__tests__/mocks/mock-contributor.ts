import { ContributorData } from '@/domain/entities'
import { randomUUID } from 'crypto'
import faker from 'faker'

export const validNewContributor = (): ContributorData => ({
  id: randomUUID(),
  name: faker.random.word(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  totalDonated: faker.datatype.number({ min: 0, max: 250 })
})
