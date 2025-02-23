import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  // This is the userlist data and the event emitter which will notify all the components about the data changes
  private userList: User[];
  readonly userListEmitter = new EventEmitter<User[]>();

  // Initializing the first set of data
  constructor() {
    this.userList = [
      new User(
        'Anirban',
        'Basak 01',
        'anirban_0_0',
        'Male',
        'Anirban Basak 01',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),

      new User(
        'Anirban',
        'Basak 02',
        'anirban_0_0',
        'Male',
        'Anirban Basak 01',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),

      new User(
        'Anirban',
        'Basak 03',
        'anirban_0_0',
        'Male',
        'Anirban Basak 01',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),
    ];
  }

  // This function returns the user list data
  getUserList = () => [...this.userList];

  // This function creates a new User
  createUser(user: User) {
    this.userList.push(user);
    this.userListEmitter.emit(this.getUserList());
  }

  // This function deletes a already present index
  deleteUser(index: number) {
    this.userList.splice(index, 1);
    this.userListEmitter.emit(this.getUserList());
  }
}
