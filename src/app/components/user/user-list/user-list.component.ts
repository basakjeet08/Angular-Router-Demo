import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  // User List which is being sent from the service along with the subscription for changes for the user List value
  userList: User[] = [];
  private userListSubscription!: Subscription;

  // Injecting the user service, router and current route
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing the user list data from the service and subscribing to the userlist data
  ngOnInit(): void {
    // Fetching initial values
    this.userList = this.userService.getUserList();

    // Subscribing for future data changes
    this.userListSubscription = this.userService.userListEmitter.subscribe(
      (userList: User[]) => {
        this.userList = userList;
      }
    );
  }

  // This function is invoked when the show More button is clicked
  onShowMoreClick(uid: string) {
    this.router.navigate(['detail', uid], {
      relativeTo: this.route,
    });
  }

  // This function is invoked when the user wants to delete an user
  onDeleteUserClick(uid: string) {
    this.userService.deleteUser(uid);
  }

  // This function is used to unsubscribe to any open event emitters
  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }
}
