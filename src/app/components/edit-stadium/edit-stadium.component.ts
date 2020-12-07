import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {

  stadium: any = {};
  stadiumForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private stadiumservice: StadiumService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activated.snapshot.paramMap.get('id');
    this.stadiumservice.getStadiumById(this.id).subscribe(
      data => {
        this.stadium = data.stadium;
      }
    )
    this.stadiumForm = this.formBuilder.group({

      name: [''],
      country: [''],
      capacity: ['']
      
    })
  }

  editStadium(){
    this.stadiumservice.editStadium(this.stadium).subscribe(
      ()=>{
        alert('stadium was updated');
    this.router.navigate(['admin']);
      }
    )
      }


}
