import { Name, Purpose, TotalCollected } from "@/domain/validations"
import { InvalidNameError } from "@/domain/errors"
import { Either, left, right } from "@/shared"

export namespace Charity {
 export type params = {
    name: string
    purpose: string
    totalCollected: number
 }
}

export class Charity {

   constructor(public readonly name: Name, public readonly purpose: Purpose, public readonly totalCollected: TotalCollected) {
     Object.freeze(this)
   }
   
   public static create(charityParams: Charity.params): Either<InvalidNameError, Charity> {

      const nameOrError = Name.create(charityParams.name)

      if(nameOrError.isLeft()) {
        return left(nameOrError.value)
      }

      const purposeOrError = Purpose.create(charityParams.purpose)

      if(purposeOrError.isLeft()) {
         return left(purposeOrError.value)
      }

      const totalCollectedOrError  = TotalCollected.create(charityParams.totalCollected)

      if (totalCollectedOrError.isLeft()) {
         return left(totalCollectedOrError.value)
      }

      const name: Name = nameOrError.value
      const purpose: Purpose = purposeOrError.value
      const totalCollected: TotalCollected = totalCollectedOrError.value

      return right(
         new Charity(
            name,
            purpose,
            totalCollected
         )
      )
   }


}