import { User } from './User';

export class Team {
  readonly uid: string = crypto.randomUUID();
  readonly createdDate: Date = new Date();

  constructor(
    readonly name: string,
    readonly description: string,
    readonly imageUrl: string,
    readonly userList: User[] = []
  ) {}
}
