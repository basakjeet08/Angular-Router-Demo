import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  createUserForm: FormGroup;

  // Injecting the user service , routers and current active route
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createUserForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  // This function is invoked when the user clicks on the create user button
  onCreateClick() {
    // Converting the userInput into a User Object
    const user = new User(
      this.createUserForm.get('firstName')?.value,
      this.createUserForm.get('lastName')?.value,
      this.createUserForm.get('username')?.value,
      this.createUserForm.get('gender')?.value,
      this.createUserForm.get('imageUrl')?.value,
      this.createUserForm.get('description')?.value
    );

    // Sending a create user request to the service
    this.userService.createUser(user);

    // Navigating back to the user list page
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
