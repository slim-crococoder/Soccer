import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayStadiumComponent } from './components/display-stadium/display-stadium.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayersComponent } from './components/players/players.component';
import { ServicesComponent } from './components/services/services.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  // path :'' = localhost:4200 : url de base
  { path:'', component: HomeComponent },
  // ki chen7el contact => afficher contact
  { path:'contact', component: ContactComponent },
  // ki chen7el service => afficher service
  { path:'service', component: ServicesComponent },
  {path:'matches', component:MatchesComponent},
  {path:'admin', component:AdminComponent},
  {path:'players', component:PlayersComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:"user", component:UsersComponent},
  {path:"addmatch", component:AddMatchComponent},
  {path:"addplayer", component:AddPlayerComponent},
  {path:"editmatch/:id", component:EditMatchComponent},
  {path:"displayMatch/:id", component:DisplayMatchComponent},
  {path:"displayUser/:id", component:DisplayUserComponent},
  {path:"editUser/:id", component:EditUserComponent},
  {path:"displayPlayers/:id", component:DisplayPlayerComponent},
  {path:"stadium", component:StadiumComponent},
  {path:"add-stadium", component:AddStadiumComponent},
  {path:"displayStadium/:id", component:DisplayStadiumComponent},
  {path:"editStadium/:id", component:EditStadiumComponent},
  {path:"editPlayer/:id", component:EditPlayerComponent},
  // path par defaut , path not found
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
