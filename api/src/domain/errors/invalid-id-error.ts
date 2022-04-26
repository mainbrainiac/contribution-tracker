export class InvalidIdError extends Error {
  constructor(name: string) {
    super(`Invalid name: ${name}`)
    this.name = 'InvalidIdError'
  }
}
