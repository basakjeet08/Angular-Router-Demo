export class User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly gender: string,
    readonly imageUrl: string,
    readonly description: string
  ) {}
}
