import { Contributor } from '@/domain/entities'
import { validContributorParams, invalidContributorParams } from '@/domain/entities/__tests__/contributor/mocks'

describe('Contributor entity', () => {
  it('should be defined', () => {
    expect(Contributor).toBeDefined();
  })

  it('should not create when has invalid values', () => {
    const contributor = Contributor.create(invalidContributorParams())

    expect(contributor).not.toBeInstanceOf(Contributor)
  })

  it('should create when has valid values', () => {
    const contributor = Contributor.create(validContributorParams())

    expect(contributor.value).toBeInstanceOf(Contributor)
  })
})