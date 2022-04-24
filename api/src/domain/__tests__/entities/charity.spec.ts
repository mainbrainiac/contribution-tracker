import { Charity } from '@/domain/entities'
import { validCharityData, invalidCharityData } from '@/domain/__tests__/entities/mocks'

describe('Charity entity', () => {
  it('should be defined', () => {
    expect(Charity).toBeDefined();
  })

  it('should not create when has invalid values', () => {
    const charity = Charity.create(invalidCharityData())

    expect(charity).not.toBeInstanceOf(Charity)
  })

  it('should create when has valid values', () => {
    const charity = Charity.create(validCharityData())

    expect(charity.value).toBeInstanceOf(Charity)
  })
})