import { Contributor, ContributorData } from "@/domain/entities";
import { AddContributorResponse, AddContributor } from "@/domain/usecases";
import { left, right } from "@/shared";
import { ContributorRepository } from "@/app/contracts";
import { ContributorAlreadyExistsError } from "@/app/errors";

export class AddContributorService implements AddContributor {
  constructor(private readonly contributorRepository: ContributorRepository) {}

  async add(contributorData: ContributorData): Promise<AddContributorResponse> {
    const contributorOrError = Contributor.create(contributorData);

    if (contributorOrError.isLeft()) {
      return left(contributorOrError.value);
    }

    const exists = await this.contributorRepository.exists(contributorData.name);

    if (exists) {
      return left(new ContributorAlreadyExistsError(contributorData.name));
    }

    await this.contributorRepository.add(contributorData);

    return right(contributorOrError.value);
  }
}