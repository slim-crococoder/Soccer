import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-display-stadium',
  templateUrl: './display-stadium.component.html',
  styleUrls: ['./display-stadium.component.css']
})
export class DisplayStadiumComponent implements OnInit {
  id: any;
  stadium: any;
  constructor(private activatedRoute: ActivatedRoute,
    private stadiumService: StadiumService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.stadiumService.getStadiumById(this.id).subscribe(
      data=>{
        this.stadium=data.stadium;
        // data.match: c'est le  nom de retour
      }
    )
  }

}
