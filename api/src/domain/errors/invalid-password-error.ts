export class InvalidPasswordError extends Error {
  constructor(password: string) {
    super(`Invalid password: ${password}`)
    this.name = 'InvalidPasswordError'
  }
}
