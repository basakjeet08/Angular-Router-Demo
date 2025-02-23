import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  // These variables are the user data variable and the subscription variable
  userData: User | undefined;
  private userDataSubscription!: Subscription;

  // Injecting the user service , router and route
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing and fetching the user data from the user service after fetching the param value from the route
  ngOnInit(): void {
    this.userDataSubscription = this.route.params.subscribe((param: Params) => {
      // Fetching the user data
      this.userData = this.userService.getUserByUid(param['uid']);

      // If the provided user uid is invalid then we go back to the /users path
      if (!this.userData) this.navigateToUserList();
    });
  }

  // This function navigates the user to the User List Screen
  navigateToUserList = () => this.router.navigate(['/users']);

  // This function is invoked when we click the delete button
  onDeleteClick() {
    if (!this.userData?.uid) return;
    this.userService.deleteUser(this.userData?.uid);

    // Navigating back to the user list screen
    this.navigateToUserList();
  }

  // Unsubscribing all the subscriptions to prevent memory leaks
  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}
