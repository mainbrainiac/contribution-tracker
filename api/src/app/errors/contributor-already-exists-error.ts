export class ContributorAlreadyExistsError extends Error {
  constructor(public readonly contributorName: string) {
    super(`Contributor with name ${contributorName} already exists`)
    this.name = 'ContributorAlreadyExistsError'
  }
}
