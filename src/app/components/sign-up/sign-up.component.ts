import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   
  
  signupForm:FormGroup;
  imagePreview:any;
  constructor(private formBuilder:FormBuilder,
    private userservice:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:['', [Validators.minLength(6),Validators.required]],
      email:['', [Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(8),Validators.required]],
      confirmPwd:['',[Validators.minLength(8),Validators.required]],
      image:['']
    }
    ,
{
validator: MustMatch('pwd', 'confirmPwd')
}
    )
  }
  


  addUser(user:any){
    //on a fait this.signupForm car c'est un variable globale
    this.userservice.addUser(user, this.signupForm.value.image).subscribe(
      ()=>{
        console.log('user added succesfuly');
      this.router.navigate(['login']);
        alert('user added');
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ image: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
