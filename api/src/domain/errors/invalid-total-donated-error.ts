export class InvalidTotalDonatedError extends Error {
  constructor(totalDonated: number) {
    super(`Invalid total donated: ${totalDonated}`)
    this.name = 'InvalidTotalDonatedError'
  }
}
