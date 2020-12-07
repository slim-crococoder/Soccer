import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  firstName:string;
  lastName:string;
  actualDate:Date;
  constructor(private router:Router) { }
  ngOnInit() {
    this.actualDate=new Date();
    this.firstName = localStorage.getItem('connectedUserFname');
    this.lastName = localStorage.getItem('connectedUserLname');
  }
  // fonction bech thezna mil page lpage ki neclikiou 3al buton login
  goToLogin(){
    // router : howa lvariable ili declarineh fil constructor
    this.router.navigate(['login']);
  }
  goToSignup(){
    this.router.navigate(['sign-up']);
  }
  logout(){
    localStorage.removeItem('connectedUserFname');
    localStorage.removeItem('connectedUserLname');
    location.reload();
  }

}
