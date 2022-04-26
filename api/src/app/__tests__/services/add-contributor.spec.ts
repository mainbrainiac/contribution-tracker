import { AddContributor } from '@/domain/usecases'
import { ContributorRepositorySpy } from '@/app/__tests__/mocks'
import { AddContributorService } from '@/app/services'
import { invalidContributorData, validContributorData } from '@/domain/__tests__/entities/mocks'
import { Contributor } from '@/domain/entities'

type SutTypes = {
  sut: AddContributor
  contributorRepositorySpy: ContributorRepositorySpy
}

const makeSut = (): SutTypes => {
  const contributorRepositorySpy = new ContributorRepositorySpy()
  const sut = new AddContributorService(contributorRepositorySpy)
  return {
    sut,
    contributorRepositorySpy
  }
}

describe('AddContributorService', () => {
  it('should return new contributor on success', async () => {
    const { sut } = makeSut()
    const contributorData = validContributorData()

    const response = await sut.add(contributorData)
    
    expect(response.value).toBeInstanceOf(Contributor)
  })

  it('should not return new contributor with invalid params', async () => {
    const { sut } = makeSut()
    const contributorData = invalidContributorData()

    const response = await sut.add(contributorData)

    expect(response.value).not.toBeInstanceOf(Contributor)
  })

  it('should call ContributorRepositorySpy with correct params', async () => {
    const { sut, contributorRepositorySpy } = makeSut()
    const contributorData = validContributorData()

    await sut.add(contributorData)

    expect(contributorRepositorySpy.addContributorCalledWith).toEqual(contributorData)
  })

  it('should throw if ContributorRepositorySpy throws', async () => {
    const { sut } = makeSut()
    const contributorData = invalidContributorData()

    const response = await sut.add(contributorData)

    expect(response.isLeft()).toBe(true)
  })
})