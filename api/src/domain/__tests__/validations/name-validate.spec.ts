import { Name } from '@/domain/validations'

describe('Name validate', () => {
  let name: string

  beforeEach(() => {
    name = null
  })

  const setName = (value: string) => (name = value)
  const isValid = (): boolean => Name.isValid(name)

  it('should be true if name is valid', () => {
    setName('Valid Name')

    expect(isValid()).toBeTruthy()
  })

  it('should be false if name is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be false if name length is greather than 64', () => {
    setName('a'.repeat(65))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if name length is smaller than 3', () => {
    setName('a'.repeat(2))

    expect(isValid()).toBeFalsy()
  })
})
