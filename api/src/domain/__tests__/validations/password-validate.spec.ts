import { Password } from "@/domain/validations"

import faker from 'faker'

describe('Password validate', () => {
  let password: string;

  beforeEach(() => {
    password = null
  })

  const setPassword = (value: string) => password = value
  const isValid = (): boolean => Password.isValid(password)

  it('should be false when password is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be true if password is valid', () => {
    setPassword('validPassword99')

    expect(isValid()).toBeTruthy()
  })

  it('should be false if password length is smaller than 6', () => {
    setPassword(faker.internet.password(5))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if password length is greather than 64', () => {
    setPassword(faker.internet.password(65))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if password not contain number', () => {
    setPassword('aA'.repeat(6))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if password not contain upper letter', () => {
    setPassword('a'.repeat(6))

    expect(isValid()).toBeFalsy()
  })
})