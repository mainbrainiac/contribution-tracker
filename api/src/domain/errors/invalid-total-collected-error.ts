export class InvalidTotalCollectedError extends Error {
  constructor(totalCollected: number) {
    super(`Invalid total collected: ${totalCollected}`)
    this.name = 'InvalidTotalCollectedError'
  }
}