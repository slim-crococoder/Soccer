import { StadiumService } from './../../services/stadium.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
//3melna id bech na7iou bouton fi display
  id:any;
  @Input() y:any;
  @Output() newStadiums: EventEmitter<any> =   new EventEmitter();

  constructor(private stadiumService:StadiumService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // declarina lvariable id bech n7outoh fil fonction ngif bech meydhahrch boutonet
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  deleteStadium(id:any){
    this.stadiumService.deleteStadium(id).subscribe(
      () => {
        console.log('Stadium deleted');
        this.stadiumService.getAllStadiums().subscribe(
          data => {
            this.newStadiums.emit(data.stadiums);
          }
        )
      }
    )
    // this.newStadiums.emit();
  }

  displayStadium(id:string){
    this.router.navigate([`displayStadium/${id}`]);
  }

  editStadium(id: any) {
    this.router.navigate([`editStadium/${id}`]);
  }

}
