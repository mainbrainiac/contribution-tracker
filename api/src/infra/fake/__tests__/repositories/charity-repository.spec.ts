import { Charity } from "@/domain/entities";
import { invalidCharityData } from "@/domain/__tests__/entities/mocks";
import { CharityRepository } from "@/infra/fake/repositories";
import { invalidNewCharity, validNewCharity } from "@/infra/fake/__tests__/mocks";

type SutTypes = {
  sut: CharityRepository;
}

const makeSut = (): SutTypes => {
  const sut = new CharityRepository();
  return {
    sut
  };
}

describe('CharityRepositoryIntegration', () => {
  describe('add', () => {
    it('should return new charity on success', async () => {
      const { sut } = makeSut();
      const charity = validNewCharity();

      const response = await sut.add(charity);

      expect(response.id).toEqual(charity.id);
      expect(response.name).toEqual(charity.name);
      expect(response.purpose).toEqual(charity.purpose);
    })

    it('should return charity with created date', async () => {
      const { sut } = makeSut();
      const charity = invalidCharityData();

      const response = await sut.add(charity);
      const createdAt = response.createdAt;
      expect(createdAt).toBeDefined();
    })
  })

  describe('exists', () => {
    it('should return true if charity exists', async () => {
      const { sut } = makeSut();
      const charity = validNewCharity();

      await sut.add(charity);

      const response = await sut.exists(charity.name);

      expect(response).toBeTruthy();
    })

    it('should return false if charity does not exist', async () => {
      const { sut } = makeSut();

      const response = await sut.exists('random_name');

      expect(response).toBeFalsy();
    })
  })

  describe('findById', () => {
    it('should return charity if exists', async () => {
      const { sut } = makeSut();
      const charity = validNewCharity();

      await sut.add(charity);

      const response = await sut.findById(charity.id);

      expect(response.id).toEqual(charity.id);
      expect(response.name).toEqual(charity.name);
      expect(response.purpose).toEqual(charity.purpose);
    })

    it('should return undefined if charity does not exist', async () => {
      const { sut } = makeSut();

      const response = await sut.findById('random_id');

      expect(response).toBeUndefined();
    })
  })

  describe('updateTotalCollected', () => {
    it('should return charity with updated total collected', async () => {
      const { sut } = makeSut();
      const charity = validNewCharity();
      const totalCollected = 500;

      await sut.add(charity);

      const response = await sut.updateTotalCollected(charity.id, totalCollected);

      expect(response.id).toEqual(charity.id);
      expect(response.name).toEqual(charity.name);
      expect(response.purpose).toEqual(charity.purpose);
      expect(response.totalCollected).toEqual(totalCollected);
    })

    it('should return undefined if charity does not exist', async () => {
      const { sut } = makeSut();

      const response = await sut.updateTotalCollected('random_id', 0);

      expect(response).toBeUndefined();
    })
  })
})