export class CharityAlreadyExistsError extends Error {
  constructor(public readonly charityName: string) {
    super(`Charity with name ${charityName} already exists`);
    this.name = "CharityAlreadyExistsError";
  }
}