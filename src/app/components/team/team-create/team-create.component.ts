import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/Models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css'],
})
export class TeamCreateComponent {
  // User Input variable to store the team data user input
  userInput = {
    name: '',
    description: '',
    imageUrl: '',
  };

  // Injecting the team service , router and route
  constructor(
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // This function is used to validate the input from the user
  isInputValid(): boolean {
    // Checking input for the name and description of the team
    if (!this.userInput.name || !this.userInput.description) {
      alert('Name and Description Fields cannot be empty !!');
      return false;
    }

    // Team Image is validated
    if (!this.userInput.imageUrl) {
      alert('Image Url needs to be filled !!');
      return false;
    }

    return true;
  }

  // This function is invoked when the user clicks on the create button
  onCreateClick() {
    if (!this.isInputValid()) return;

    // Creating a Team Object
    const team = new Team(
      this.userInput.name,
      this.userInput.description,
      this.userInput.imageUrl
    );

    // Sending a team data to the service layer to create a team
    this.teamService.createTeam(team);

    // Navigating back to the team list page
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
