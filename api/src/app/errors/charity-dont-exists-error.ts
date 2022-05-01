export class CharityDontExistsError extends Error {
  constructor(public readonly charityId: string) {
    super(`Charity with id ${charityId} don't exists`)
    this.name = 'CharityDontExistsError'
  }
}
