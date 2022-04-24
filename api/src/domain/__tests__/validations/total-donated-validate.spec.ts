import { TotalDonated } from "@/domain/validations"

describe('TotalDonated validate', () => {
  let totalDonated: number

  beforeEach(() => {
    totalDonated = null
  })

  const setTotalDonated = (value: number) => totalDonated = value
  const isValid = (): boolean => TotalDonated.isValid(totalDonated)

  it('should be true when total donated is valid', () => {
    setTotalDonated(100)

    expect(isValid()).toBeTruthy()
  })
  
  it('should be false when total donated is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be false when total donated is negative', () => {
    setTotalDonated(-100)

    expect(isValid()).toBeFalsy()
  })
})