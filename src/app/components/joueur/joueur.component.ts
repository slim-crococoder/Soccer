import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  // joueur: any;
  id:any;
  @Input() j: any;
  @Output() newStadiums: EventEmitter<any> = new EventEmitter();
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    // this.playerService.getAllPlayers().subscribe(
    //   data => {
    //     this.players = data.players;
    //   }
    // )
  }
  delete(id: string) {
    this.playerService.deletePlayers(id).subscribe(
      () => {
        console.log('player delete successfuly');
        // this.router.navigate(['admin']);
        this.playerService.getAllPlayers().subscribe(
          data => {
            this.newStadiums.emit(data.players);
          }
        )
      }
    )
  }

  display(id: string) {
    this.router.navigate([`displayPlayers/${id}`])
  }
  

  
  editPlayer(id: any) {
    this.router.navigate([`editPlayer/${id}`]);
  }

}
