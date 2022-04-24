import { AddCharity } from '@/domain/usecases'
import { CharityRepositorySpy } from '@/app/__tests__/mocks'
import { AddCharityService } from '@/app/services'
import { validCharityData } from '@/domain/__tests__/entities/mocks'
import { right } from '@/shared'
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
})