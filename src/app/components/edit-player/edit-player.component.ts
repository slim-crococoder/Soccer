import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  
  player: any = {};
  playerForm: FormGroup;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private playerservice: PlayerService,
    private router: Router,
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.playerservice.getPlayerById(this.id).subscribe(
      data => {
        this.player = data.player;
      }
    )
    this.playerForm = this.formBuilder.group({

      nom:[''],
      prenom:[''],
      age:[''],
      poste:['']
    })
  }

  editPlayer(){
    this.playerservice.editPlayer(this.player).subscribe(
      ()=>{
        alert('player was updated');
    this.router.navigate(['admin']);
      }
    )
      }

}
