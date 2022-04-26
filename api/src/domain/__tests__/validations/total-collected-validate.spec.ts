import { TotalCollected } from '@/domain/validations'

describe('TotalCollected validate', () => {
  let totalCollected: number

  beforeEach(() => {
    totalCollected = null
  })

  const setTotalCollected = (value: number) => (totalCollected = value)
  const isValid = (): boolean => TotalCollected.isValid(totalCollected)

  it('should be true when total collected is valid', () => {
    setTotalCollected(100)

    expect(isValid()).toBeTruthy()
  })

  it('should be false when total collected is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be false when total collected is negative', () => {
    setTotalCollected(-100)

    expect(isValid()).toBeFalsy()
  })
})
