import { Email } from "@/domain/validations";

import faker from 'faker'

describe('Email validate', () => {
  let email: string

  beforeEach(() => {
    email = null
  })

  const setEmail = (value: string) => email = value
  const isValid = (): boolean => Email.isValid(email)

  it('should be false when email is null', () => {
    expect(isValid()).toBeFalsy()
  })

  it('should be true if email is valid', () => {
    setEmail(faker.internet.email())

    expect(isValid()).toBeTruthy()
  })

  it('should be false if email length is greather than 256', () => {
    setEmail('a'.repeat(257))

    expect(isValid()).toBeFalsy()
  })

  it('should be false if email contain invalid characters', () => {
    setEmail('a @email.com')

    expect(isValid()).toBeFalsy()
  })

  it('should be false if email contain two dots', () => {
    setEmail('a@email..com')

    expect(isValid()).toBeFalsy()
  })

  it('should be false if account length is greather than 64', () => {
    setEmail('a'.repeat(65) + '@email.com')

    expect(isValid()).toBeFalsy()
  })

  it('should be false if any domainPart is greather than 64', () => {
    setEmail('any@' + 'a'.repeat(64) + '.com')

    expect(isValid()).toBeFalsy()
  })
  
})