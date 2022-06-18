import { CharityData } from '@/domain/entities'
import { randomUUID } from 'crypto'
import faker from 'faker'

export const validNewCharity = (): CharityData => ({
  id: randomUUID(),
  name: faker.random.word(),
  purpose: faker.random.words(),
  totalCollected: faker.datatype.number({ min: 0, max: 250 })
})

export const invalidNewCharity = () => ({
  id: randomUUID(),
  name: undefined,
  purpose: faker.random.words(),
  totalCollected: faker.datatype.number({ min: 0, max: 250 })
})
