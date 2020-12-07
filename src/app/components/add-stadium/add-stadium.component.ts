import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
stadium:any={};
stadiumForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private stadiumservice:StadiumService,
    private router:Router) { }

  ngOnInit(){
this.stadiumForm=this.formBuilder.group({

  name:[''],
  country:[''],
  capacity:[''],
  
})


}
addStadium(){
  console.log('here my stadium',this.stadium);
  this.stadiumservice.addStadium(this.stadium).subscribe(
    ()=>{
      console.log('stadium added succesfuly');
      this.router.navigate(['admin']);
      alert('stadium added');
    }
  )
  
  }

  

}
