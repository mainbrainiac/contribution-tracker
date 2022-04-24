import { Charity } from "@/domain/entities";
import { InvalidIdError, InvalidNameError, InvalidPurposeError, InvalidTotalCollectedError } from "@/domain/errors";
import { Either } from "@/shared";

export type AddCharityResponse = Either<InvalidNameError | InvalidIdError | InvalidPurposeError | InvalidTotalCollectedError, Charity>
