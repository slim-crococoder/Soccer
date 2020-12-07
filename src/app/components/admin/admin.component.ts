import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matchs: any;
  users: any;
  player: any;
  stadiums: any;
  constructor(private matchService: MatchService,
    private userService: UserService,
    private playerService: PlayerService,
    private stadiumService: StadiumService,
    private router: Router) { }

  ngOnInit() {
    this.getMatchs();
    this.getAllUsers();
    this.getPlayers();
    this.getAllStadiums();

  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log('here data in service', data);

        this.users = data.users;
      }
    );
  }

  getAllStadiums() {
    this.stadiumService.getAllStadiums().subscribe(
      data => {
        console.log('here data in service', data.stadiums);

        this.stadiums = data.stadiums;
      }
    );
  }
  getMatchs() {
    this.matchService.getAllMatch().subscribe(
      data => {
        this.matchs = data.matches;
      }
    )
  }
  getPlayers() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.player = data.players;
      }
    )
  }
  deleteMatch(id: string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log('match delete successfuly');
        this.getMatchs();
      }
    )
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('user delete successfuly');
        this.getAllUsers();
      }
    )
  }
  // editMatch(id: any) {
  //   this.router.navigate([`editmatch/${id}`]);
  // }

  editUser(id: any) {
    this.router.navigate([`editUser/${id}`]);
  }
  // displayMatch(id: any) {
  //   this.router.navigate([`displayMatch/${id}`]);
  // }

  displayUser(id: any) {
    this.router.navigate([`displayUser/${id}`]);
  }
  // editPlayer(id: any) {
  //   this.router.navigate([`editPlayer/${id}`]);
  // }
//  fonction bech trafrichi directement ki tfassa5 mil child lil parent
  updateStadiums(gettedStadiums: any) {
    this.stadiums = gettedStadiums;
  }
  updateMatchs(gettedMatchs: any) {
    this.matchs = gettedMatchs;
  }
  updatePlayers(gettedPlayers: any) {
    this.player = gettedPlayers;
  }
}
