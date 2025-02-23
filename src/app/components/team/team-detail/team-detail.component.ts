import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/Models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  // These variables are the team data and the subscription variables
  teamData: Team | undefined;
  private teamDataSubscription!: Subscription;

  // Injecting the team service , router and route
  constructor(
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing the required data and subscribing to the events
  ngOnInit(): void {
    this.teamDataSubscription = this.route.params.subscribe((param: Params) => {
      // Fetching the team details
      this.teamData = this.teamService.getTeamByUid(param['uid']);

      // If the provided uid is incorrect then we redirect back to the team list page
      if (!this.teamData) this.navigateToTeamList();
    });
  }

  // This function navigates back to the team list page
  navigateToTeamList = () => this.router.navigate(['/teams']);

  // This function is clicked when the user clicks on the delete button
  onDeleteClick() {
    if (!this.teamData?.uid) return;
    this.teamService.deleteTeam(this.teamData.uid);

    // Navigating to the team list page
    this.navigateToTeamList();
  }

  // Unsubscribing to all the subscriptions to prevent memory leaks
  ngOnDestroy(): void {
    this.teamDataSubscription.unsubscribe();
  }
}
