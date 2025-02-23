import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  // User Input Variable to store user input
  userInput = {
    firstName: '',
    lastName: '',
    username: '',
    gender: '',
    imageUrl: '',
    description: '',
  };

  // Injecting the user service , routers and current active route
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // This function checks if the user input are valid or not
  isInputValid(): boolean {
    // User firstname , lastname and username input are validated
    if (
      !this.userInput.firstName ||
      !this.userInput.lastName ||
      !this.userInput.username
    ) {
      alert('Check firstname , lastname and username. They cant be Empty !!');
      return false;
    }

    // User Gender is validated
    if (!this.userInput.gender) {
      alert('User Gender not choosen');
      return false;
    }

    // User image url is validated
    if (!this.userInput.imageUrl) {
      alert('Image not provided');
      return false;
    }

    // User description is validated
    if (!this.userInput.description) {
      alert('User Description cannot be empty');
      return false;
    }

    return true;
  }

  // This function is invoked when the user clicks on the create user button
  onCreateClick() {
    if (!this.isInputValid()) {
      return;
    }

    // Converting the userInput into a User Object
    const user = new User(
      this.userInput.firstName,
      this.userInput.lastName,
      this.userInput.username,
      this.userInput.gender,
      this.userInput.imageUrl,
      this.userInput.description
    );

    // Sending a create user request to the service
    this.userService.createUser(user);

    // Navigating back to the user list page
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
