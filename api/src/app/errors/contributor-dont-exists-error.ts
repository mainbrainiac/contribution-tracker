export class ContributorDontExistsError extends Error {
  constructor(public readonly contributorId: string) {
    super(`Contributor with id ${contributorId} don't exists`)
    this.name = 'ContributorDontExistsError'
  }
}
