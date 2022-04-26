import { ContributorData } from "@/domain/entities";
import { ContributorModel } from "@/app/models";

export interface ContributorRepository {
  add(contributorData: ContributorData): Promise<ContributorModel>;
  exists(name: string): Promise<boolean>;
}