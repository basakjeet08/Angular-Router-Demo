import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the user wants to create a new user
  onCreateUserClick() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
