import { ContributorModel } from "@/app/models";

export const contributors: ContributorModel[] = [
  {
    id: '1',
    name: 'Contributor 1',
    email: 'teste@hotmail.com',
    password: '123456',
    totalDonated: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Contributor 2',
    email: 'teste2@hotmail.com',
    password: '123456',
    totalDonated: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]