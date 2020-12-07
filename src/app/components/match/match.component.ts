import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  // matchs:any;
  @Input() m:any;
  @Output() newStadiums: EventEmitter<any> =   new EventEmitter();
  constructor(
    private matchService:MatchService,
    private router:Router
    ) { }
 
  ngOnInit() {
    
  }
  delete(id:string){
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        console.log('match delete successfuly');
        // this.router.navigate(['admin']);
        this.matchService.getAllMatch().subscribe(
          data => {
            this.newStadiums.emit(data.matches);
          }
        )
      }
    )
  }
  
  displayMatch(id: string) {
    this.router.navigate([`displayMatch/${id}`])
  }
  
  edit(id:any){
    this.router.navigate([`editmatch/${id}`]);
    
  }

}
