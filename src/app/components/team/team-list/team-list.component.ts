import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/Models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit, OnDestroy {
  // Team list along with its subscription
  teamList: Team[] = [];
  private teamListSubscription!: Subscription;

  // Injecting the team service , router and route
  constructor(
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing the team list data from the service and subscribing to the team list data
  ngOnInit(): void {
    this.teamList = this.teamService.getTeamList();

    // Subscribing to the team list for future changes
    this.teamListSubscription = this.teamService.teamListEmitter.subscribe(
      (teamList: Team[]) => {
        this.teamList = teamList;
      }
    );
  }

  // This function in invoked when the show more button is clicked
  onShowMoreClick(uid: string) {
    this.router.navigate(['detail', uid], { relativeTo: this.route });
  }

  // This function is invoked when the delete button clicked
  onDeleteTeamClick = (uid: string) => this.teamService.deleteTeam(uid);

  // This function is used to unsubscribe to any open event emitters
  ngOnDestroy(): void {
    this.teamListSubscription.unsubscribe();
  }
}
