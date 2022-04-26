import { AddCharity } from '@/domain/usecases'
import { CharityRepositorySpy } from '@/app/__tests__/mocks'
import { AddCharityService } from '@/app/services'
import {
  invalidCharityData,
  validCharityData
} from '@/domain/__tests__/entities/mocks'
import { Charity } from '@/domain/entities'

type SutTypes = {
  sut: AddCharity
  charityRepositorySpy: CharityRepositorySpy
}

const makeSut = (): SutTypes => {
  const charityRepositorySpy = new CharityRepositorySpy()
  const sut = new AddCharityService(charityRepositorySpy)
  return {
    sut,
    charityRepositorySpy
  }
}

describe('AddCharityService', () => {
  it('should return new charity on success', async () => {
    const { sut } = makeSut()
    const charityData = validCharityData()

    const response = await sut.add(charityData)

    expect(response.value).toBeInstanceOf(Charity)
  })

  it('should not return new charity with invalid params', async () => {
    const { sut } = makeSut()
    const charityData = invalidCharityData()

    const response = await sut.add(charityData)

    expect(response.value).not.toBeInstanceOf(Charity)
  })

  it('should call CharityRepositorySpy with correct params', async () => {
    const { sut, charityRepositorySpy } = makeSut()
    const charityData = validCharityData()

    await sut.add(charityData)

    expect(charityRepositorySpy.addCharityCalledWith).toEqual(charityData)
  })

  it('should throw if CharityRepositorySpy throws', async () => {
    const { sut } = makeSut()
    const charityData = invalidCharityData()

    const response = await sut.add(charityData)

    expect(response.isLeft()).toBe(true)
  })
})
