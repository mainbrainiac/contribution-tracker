import { Email } from "@/domain/entities/email";

describe('Email validate', () => {
  it('should be false when email is null', () => {
    const isValid = Email.isValid(null)

    expect(isValid).toBeFalsy()
  })

  it('should be true if email is valid', () => {
    const validEmail = 'any@email.com'

    const isValid = Email.isValid(validEmail)

    expect(isValid).toBeTruthy()
  })

  it('should be false if email length is greather than 256', () => {
    const invalidEmail = 'a'.repeat(257)

    const isValid = Email.isValid(invalidEmail)

    expect(isValid).toBeFalsy()
  })

  it('should be false if email contain invalid characters', () => {
    const invalidEmail = 'a @email.com'

    const isValid = Email.isValid(invalidEmail)

    expect(isValid).toBeFalsy()
  })

  it('should be false if email contain two dots', () => {
    const invalidEmail = 'a@email..com'

    const isValid = Email.isValid(invalidEmail)

    expect(isValid).toBeFalsy()
  })

  it('should be false if account length is greather than 64', () => {
    const invalidEmail = 'a'.repeat(65) + '@email.com'

    const isValid = Email.isValid(invalidEmail)

    expect(isValid).toBeFalsy()
  })

  it('should be false if any domainParts contain part greather than 63', () => {
    const invalidEmail = 'any@' + 'a'.repeat(64) + '.com'

    const isValid = Email.isValid(invalidEmail)

    expect(isValid).toBeFalsy()
  })
  
})