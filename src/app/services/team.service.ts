import { EventEmitter, Injectable } from '@angular/core';
import { Team } from '../Models/Team';

@Injectable({ providedIn: 'root' })
export class TeamService {
  // This is the team list data and the event emitter which will notify all the components about the data changes
  private teamList: Team[];
  readonly teamListEmitter = new EventEmitter<Team[]>();

  // Initializing the first set of team data
  constructor() {
    this.teamList = [
      new Team(
        'Team 01',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
        'https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ),
      new Team(
        'Team 02',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
        'https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ),
      new Team(
        'Team 03',
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa repellat praesentium perferendis magni perspiciatis, laudantium earum dolorem deserunt dicta error quis, accusamus atque enim ex molestiae, quas minima voluptates.`,
        'https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ),
    ];
  }

  // This function returns the team list
  getTeamList = () => [...this.teamList];

  // This function creates the team and emits the new data event
  createTeam(team: Team) {
    this.teamList.push(team);
    this.teamListEmitter.emit(this.getTeamList());
  }

  // This function finds if the given uid team is present or not
  getTeamByUid(uid: string): Team | undefined {
    return this.teamList.find((team) => team.uid === uid);
  }

  // This function deletes the team which has the same uid
  deleteTeam(uid: string): void {
    this.teamList = this.teamList.filter((team) => team.uid !== uid);
    this.teamListEmitter.emit(this.getTeamList());
  }
}
