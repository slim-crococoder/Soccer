import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id:any;
  match:any;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService,
    
  ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data=>{
        this.match=data.match;
        // data.match: c'est le  nom de retour
      }
    )
  }
  

}
