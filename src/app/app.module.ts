import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { OrganisationListComponent } from './components/organisation-list/organisation-list.component';
import { UserService } from './services/user.service';

// This is the routing for the current module
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'organisations', component: OrganisationListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    OrganisationListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
