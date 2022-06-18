import { ContributorRepository } from '@/infra/fake/repositories'
import { validNewContributor } from '@/infra/fake/__tests__/mocks'

type SutTypes = {
  sut: ContributorRepository
}

const makeSut = (): SutTypes => {
  const sut = new ContributorRepository()
  return {
    sut
  }
}

describe('ContributorRepositoryIntegration', () => {
  describe('add', () => {
    it('should return new contributor on success', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()

      const response = await sut.add(contributor)

      expect(response.id).toEqual(contributor.id)
      expect(response.name).toEqual(contributor.name)
      expect(response.email).toEqual(contributor.email)
    })

    it('should return contributor with created date', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()

      const response = await sut.add(contributor)

      const createdAt = response.createdAt
      expect(createdAt).toBeDefined()
    })

    it('should add contributor on database', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()

      await sut.add(contributor)

      const response = await sut.findById(contributor.id)
      expect(response.id).toBe(contributor.id)
    })
  })

  describe('exists', () => {
    it('should return true if contributor with email exists', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()

      await sut.add(contributor)
      const response = await sut.exists(contributor.email)

      expect(response).toBe(true)
    })

    it('should return false if contributor with email not exists', async () => {
      const { sut } = makeSut()

      const response = await sut.exists('not_exists_email@hotmail.com')

      expect(response).toBe(false)
    })
  })

  describe('findById', () => {
    it('should return Contributor if find', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()

      await sut.add(contributor)
      const response = await sut.findById(contributor.id)

      expect(response).toMatchObject(contributor)
    })

    it('should return undefined if not find', async () => {
      const { sut } = makeSut()

      const response = await sut.findById('not_exists_id')

      expect(response).toBeUndefined()
    })
  })

  describe('updateTotalDonated', () => {
    it('should return contributor with updated total donated', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()
      const totalDonated = 500

      sut.add(contributor)
      const response = await sut.updateTotalDonated(
        contributor.id,
        totalDonated
      )

      expect(response.id).toBe(contributor.id)
      expect(response.totalDonated).toBe(totalDonated)
    })

    it('should return undefined if contributor does not exist', async () => {
      const { sut } = makeSut()
      const totalDonated = 500

      const response = await sut.updateTotalDonated(
        'not_exists_id',
        totalDonated
      )

      expect(response).toBeUndefined()
    })

    it('should update total donate in the database', async () => {
      const { sut } = makeSut()
      const contributor = validNewContributor()
      const totalDonated = 500

      await sut.add(contributor)
      await sut.updateTotalDonated(contributor.id, totalDonated)
      const response = await sut.findById(contributor.id)

      expect(response.id).toBe(contributor.id)
      expect(response.totalDonated).toBe(totalDonated)
    })
  })
})
