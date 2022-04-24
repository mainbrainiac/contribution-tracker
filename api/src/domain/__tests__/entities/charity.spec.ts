import { Charity } from '@/domain/entities'
import { validCharityParams, invalidCharityParams } from '@/domain/__tests__/entities/mocks'

describe('Charity entity', () => {
  it('should be defined', () => {
    expect(Charity).toBeDefined();
  })

  it('should not create when has invalid values', () => {
    const charity = Charity.create(invalidCharityParams())

    expect(charity).not.toBeInstanceOf(Charity)
  })

  it('should create when has valid values', () => {
    const charity = Charity.create(validCharityParams())

    expect(charity.value).toBeInstanceOf(Charity)
  })
})