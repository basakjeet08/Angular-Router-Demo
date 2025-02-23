import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './components/team/team.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';

// This is the routing for the current module
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'detail/:uid', component: UserDetailComponent },
    ],
  },
  {
    path: 'teams',
    component: TeamComponent,
    children: [
      { path: '', component: TeamListComponent },
      { path: 'create', component: TeamCreateComponent },
      { path: 'detail/:uid', component: TeamDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    CreateUserComponent,
    UserDetailComponent,
    TeamComponent,
    TeamListComponent,
    TeamCreateComponent,
    TeamDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
