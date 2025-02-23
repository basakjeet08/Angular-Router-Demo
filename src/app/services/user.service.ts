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
        'https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),

      new User(
        'Anirban',
        'Basak 02',
        'anirban_0_0',
        'Male',
        'https://images.unsplash.com/photo-1740137660661-274c804a891d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),

      new User(
        'Anirban',
        'Basak 03',
        'anirban_0_0',
        'Male',
        'https://images.unsplash.com/photo-1740165886179-c2be3d6447ca?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`
      ),
    ];
  }

  // This function returns the user list data
  getUserList = () => [...this.userList];

  // This function creates a new User
  createUser(user: User): void {
    this.userList.push(user);
    this.userListEmitter.emit(this.getUserList());
  }

  // This function fetches the user according to the given uid
  getUserByUid(uid: string): User | undefined {
    return this.userList.find((user) => user.uid == uid);
  }

  // This function deletes a already present index
  deleteUser(uid: string): void {
    this.userList = this.userList.filter((user) => user.uid != uid);
    this.userListEmitter.emit(this.getUserList());
  }
}
