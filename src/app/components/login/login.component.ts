import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any={};
loginForm:FormGroup;
  constructor(private x:FormBuilder,
    private userservice:UserService,
    private router:Router) { }

  ngOnInit(){
    this.loginForm=this.x.group({
      email:[''],
      password:['']
     
     })  
  }
  addLogin(){
    console.log('here my object login',this.login);
    this.userservice.login(this.login).subscribe(
      data=>{
        if(data){
          location.reload();
          localStorage.setItem('connectedUserFname',data.user[0].firstName);
          localStorage.setItem('connectedUserLname',data.user[0].lastName);
          
          
        }
        
      }
    )
    this.router.navigate(['']);
  }

}
