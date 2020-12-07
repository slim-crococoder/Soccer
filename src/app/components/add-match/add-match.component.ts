import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
matchForm:FormGroup;
imagePreview:any;
  constructor(private formBuilder:FormBuilder,
    private matchservice:MatchService,
    private router:Router) { }

  ngOnInit(){
this.matchForm=this.formBuilder.group({

  teamOne:[''],
  teamTwo:[''],
  scoreOne:[''],
  scoreTwo:[''],
  image:['']
})


}
addMatch(){
  console.log('here my match',this.match);
  this.matchservice.addMatch(this.match, this.matchForm.value.image).subscribe(
    ()=>{
      console.log('match added succesfuly');
      this.router.navigate(['admin']);
      alert('match added');
    }
  )
  
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ image: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
