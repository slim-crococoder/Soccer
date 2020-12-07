import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_forms_forms_bc } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  
  matchs: any;
  
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatch().subscribe(
      data=>{
        this.matchs=data.matches;
      }
    );
  }

}
