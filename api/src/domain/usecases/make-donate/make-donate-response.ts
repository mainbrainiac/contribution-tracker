import { Donation } from '@/domain/entities'
import {
  InvalidIdError,
  InvalidNameError,
  InvalidPurposeError,
  InvalidTotalCollectedError
} from '@/domain/errors'
import { Either } from '@/shared'

export type MakeDonateResponse = Either<
  | InvalidNameError
  | InvalidIdError
  | InvalidPurposeError
  | InvalidTotalCollectedError,
  Donation
>
