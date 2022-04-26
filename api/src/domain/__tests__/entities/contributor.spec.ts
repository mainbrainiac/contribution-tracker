import { Contributor } from '@/domain/entities'
import { validContributorData, invalidContributorData } from '@/domain/__tests__/entities/mocks'

describe('Contributor entity', () => {
  it('should be defined', () => {
    expect(Contributor).toBeDefined();
  })

  it('should not create when has invalid values', () => {
    const contributor = Contributor.create(invalidContributorData())

    expect(contributor).not.toBeInstanceOf(Contributor)
  })

  it('should create when has valid values', () => {
    const contributor = Contributor.create(validContributorData())

    expect(contributor.value).toBeInstanceOf(Contributor)
  })
})