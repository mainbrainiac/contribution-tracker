import { CharityData } from '@/domain/entities'
import { randomUUID } from 'crypto'
import { random } from 'faker'

export const validNewCharity = (): CharityData => ({
  id: randomUUID(),
  name: random.word(),
  purpose: random.words(),
  totalCollected: 0
})

export const invalidNewCharity = () => ({
  id: randomUUID(),
  name: undefined,
  purpose: random.words(),
  totalCollected: 0
})
