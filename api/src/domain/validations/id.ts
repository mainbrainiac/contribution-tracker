import { Either, left, right } from "@/shared"
import { InvalidIdError } from "@/domain/errors"

export class Id {

  private constructor(private readonly id: string) {
    Object.freeze(this)
  }

  public static create(id: string): Either<InvalidIdError, Id> {
    if (!id) {
      id = crypto.randomUUID()
    } 

    if (!Id.isValid(id)) {
      return left(new InvalidIdError(id))
    }

    return right(new Id(id))
  }

  public static isValid(id: string): boolean {

    if (!id) {
      return false
    }

    const idWithoutSpaces = id.replace(/\s/g, '')

    if(idWithoutSpaces.length < 1) {
      return false
    }

    return true
  } 

  get value(): string {
    return this.id
  }
}