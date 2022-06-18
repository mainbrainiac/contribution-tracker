import { IContributorRepository } from "@/app/contracts";
import { ContributorModel } from "@/app/models";
import { ContributorData } from "@/domain/entities";
import { contributors } from "@/infra/fake/data-sources";
import { randomUUID } from "crypto";


export class ContributorRepository implements IContributorRepository {
  async add(contributorData: ContributorData): Promise<ContributorModel> {
    const contributor = {
      id: randomUUID(),
      email: contributorData.email,
      password: contributorData.password,
      name: contributorData.name,
      totalDonated: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    contributors.push(contributor)
    return contributor
  }

  async exists(email: string): Promise<boolean> {
    return contributors.some(contributor => contributor.email === email);
  }

  async findById(id: string): Promise<ContributorModel> {
    return contributors.find(contributor => contributor.id === id);
  }

  async updateTotalDonated(id: string, totalDonated: number): Promise<ContributorModel> {
    const contributor = await this.findById(id)
    contributor.totalDonated = totalDonated
    return contributor
  }
}