import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  // Dummy Data to be shown in the UI For now
  userList = [
    {
      name: 'Anirban Basak 01',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
    },
    {
      name: 'Anirban Basak 02',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
    },
    {
      name: 'Anirban Basak 03',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
    },
  ];

  // This function is invoked when the user wants to create a new user
  onCreateUserClick() {
    alert('Create User Clicked');
  }

  // This function is invoked when the user wants to delete an user
  onDeleteUserClick(index: number) {
    alert(`Delete user on Index ${index} is clicked !!`);
  }
}
