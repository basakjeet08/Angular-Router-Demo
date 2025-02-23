import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { OrganisationListComponent } from './components/organisation-list/organisation-list.component';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';

// This is the routing for the current module
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'detail', component: UserDetailComponent },
    ],
  },
  { path: 'organisations', component: OrganisationListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    OrganisationListComponent,
    UserComponent,
    CreateUserComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
