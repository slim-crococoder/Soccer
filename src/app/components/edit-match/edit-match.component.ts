import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match: any = {};
  matchForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private matchservice: MatchService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    // le module activated route permet de capturer url active et maper pour faire retourner le parametre id
    this.id = this.activated.snapshot.paramMap.get('id');
    this.matchservice.getMatchById(this.id).subscribe(
      data => {
        this.match = data.match;
      }
    )
    this.matchForm = this.formBuilder.group({

      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })

  }
  editMatch(){
this.matchservice.editMatch(this.match).subscribe(
  ()=>{
    alert('match was updated');
this.router.navigate(['admin']);
  }
)
  }
  

}
