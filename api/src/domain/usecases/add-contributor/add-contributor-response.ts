import { Contributor } from "@/domain/entities";
import { InvalidIdError, InvalidNameError, InvalidPurposeError, InvalidTotalCollectedError } from "@/domain/errors";
import { Either } from "@/shared";

export type AddContributorResponse = Either<InvalidNameError | InvalidIdError | InvalidPurposeError | InvalidTotalCollectedError, Contributor>
