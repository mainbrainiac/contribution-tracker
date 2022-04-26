import { Purpose } from '@/domain/validations'

describe('Purpose validate', () => {
  let purpose: string

  beforeEach(() => {
    purpose = null
  })

  const setPurpose = (value: string) => (purpose = value)
  const isValid = (): boolean => Purpose.isValid(purpose)

  it('should be true if purpose is valid', () => {
    setPurpose('aa'.repeat(100))

    expect(isValid()).toBeTruthy()
  })

  it('should be false if purpose is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be false if purpose length is greather than 256', () => {
    setPurpose('a'.repeat(257))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if purpose length is smaller than 12', () => {
    setPurpose('a'.repeat(11))

    expect(isValid()).toBeFalsy()
  })
})
