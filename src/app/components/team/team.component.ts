import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // This function is invoked when the create a team button is clicked
  onCreateTeamClick() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
