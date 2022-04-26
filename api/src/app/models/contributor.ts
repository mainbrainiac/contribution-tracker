import { ContributorData } from "@/domain/entities";

export interface ContributorModel extends ContributorData {
  createdAt: Date
  updatedAt: Date
}