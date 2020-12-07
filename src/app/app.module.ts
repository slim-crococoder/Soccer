import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { InfoComponent } from './components/info/info.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { MatchComponent } from './components/match/match.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { SearchComponent } from './components/search/search.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { DisplayStadiumComponent } from './components/display-stadium/display-stadium.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    WorldCupComponent,
    ScoreComponent,
    NewsComponent,
    InfoComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    AdminComponent,
    PlayersComponent,
    PlayerComponent,
    UsersComponent,
    MatchComponent,
    JoueurComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    DisplayUserComponent,
    EditUserComponent,
    DisplayPlayerComponent,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent,
    DisplayStadiumComponent,
    EditStadiumComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
