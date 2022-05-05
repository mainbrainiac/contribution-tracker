export class InvalidIdError extends Error {
  constructor(name: string) {
    super(`Invalid Id: ${name}`)
    this.name = 'InvalidIdError'
  }
}
