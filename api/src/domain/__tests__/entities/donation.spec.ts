import { Donation } from '@/domain/entities'
import {
  invalidDonationData,
  validDonationData
} from '@/domain/__tests__/entities/mocks'

describe('Donation entity', () => {
  it('should be defined', () => {
    expect(Donation).toBeDefined()
  })

  it('should not create when has invalid values', () => {
    const contributor = Donation.create(invalidDonationData())

    expect(contributor).not.toBeInstanceOf(Donation)
  })

  it('should create when has valid values', () => {
    const contributor = Donation.create(validDonationData())

    expect(contributor.value).toBeInstanceOf(Donation)
  })
})
