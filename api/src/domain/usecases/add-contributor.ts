import { Contributor } from "@/domain/entities";

export interface AddContributor {
  add(contributorParams: Contributor.params): Promise<Contributor>;
}