import { CharityData } from '@/domain/entities'

export interface CharityModel extends CharityData {
  createdAt: Date
  updatedAt: Date
}
