import { CharityData } from '@/domain/entities'

import faker from 'faker'

export const validCharityData = (): CharityData => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  purpose: faker.lorem.paragraph(1),
  totalCollected: faker.datatype.number({ min: 1, max: 100 })
})

export const invalidCharityData = (): CharityData => ({
  id: faker.lorem.word(),
  name: null,
  purpose: 'invalid purpose',
  totalCollected: -100
})
