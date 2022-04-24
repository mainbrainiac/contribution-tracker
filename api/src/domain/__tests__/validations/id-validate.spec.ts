import { Id } from "@/domain/validations"

import faker from 'faker'

describe('Id validate', () => {
  let id: string

  beforeEach(() => {
    id = null
  })

  const setId = (value: string) => id = value
  const isValid = (): boolean => Id.isValid(id)

  it('should be true if id is valid', () => {
    setId(faker.datatype.uuid())

    expect(isValid()).toBeTruthy()
  })

  it('should be false if id is null', () => {
    expect(isValid()).toBeFalsy()
  })
})