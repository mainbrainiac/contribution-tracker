export class InvalidPurposeError extends Error {
  constructor(purpose: string) {
    super(`Invalid purpose: ${purpose}`)
    this.name = 'InvalidPurposeError'
  }
}
