import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  // Binding to the template references for later use
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput')
  descriptionInput!: ElementRef<HTMLInputElement>;

  // Injecting the user service , routers and current active route
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // This function is invoked when the user clicks on the create user button
  onCreateClick() {
    // Name and description
    const name = this.nameInput.nativeElement.value.trim();
    const description = this.descriptionInput.nativeElement.value.trim();

    // Checking if the fields are empty
    if (!name || !description) {
      alert('Please Enter all the Fields !!');
      return;
    }

    // Sending a create user request to the service
    this.userService.createUser(name, description);

    // Navigating back to the user list page
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
