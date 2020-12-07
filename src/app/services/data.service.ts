import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let players = [
      { id: 1, nom: 'sergio', prenom: 'ramos', age: '24', poste: 'defenseur', image: 'assets/images/img_2.jpg' },
      { id: 2, nom: 'karim', prenom: 'benzima', age: '27', poste: 'attaquant', image: 'assets/images/img_2.jpg' },
      { id: 3, nom: 'eden', prenom: 'hazard', age: '27', poste: 'attaquant', image: 'assets/images/img_2.jpg' },
      { id: 4, nom: 'vinicius', prenom: 'junior', age: '27', poste: 'attaquant', image: 'assets/images/img_2.jpg' },
      { id: 5, nom: 'martin ', prenom: 'odegaard', age: '27', poste: 'milieu', image: 'assets/images/img_2.jpg' },
      { id: 6, nom: 'feland', prenom: 'mendy', age: '27', poste: 'defenseur', image: 'assets/images/img_2.jpg' },
      { id: 7, nom: 'marcelo', prenom: 'marcelo', age: '27', poste: 'defenseur', image: 'assets/images/img_2.jpg' },
      { id: 8, nom: 'luca', prenom: 'jovic', age: '27', poste: 'attaquant', image: 'assets/images/img_2.jpg' }
    ];

    // let matchs = [
    //   { id: 1, scoreOne: 8, scoreTwo: 0, teamOne: 'MAZEMBE', teamTwo: 'CA', playersTeamOne: ['messi', 'Anas'], playersTeamTwo: ['salah', 'ali'] },
    //   { id: 2, scoreOne: 1, scoreTwo: 2, teamOne: 'JUV', teamTwo: 'MIL', playersTeamOne: ['messi', 'Anas'], playersTeamTwo: ['salah', 'ali'] },
    //   { id: 3, scoreOne: 2, scoreTwo: 3, teamOne: 'LIV', teamTwo: 'MUC', playersTeamOne: ['messi', 'Anas'], playersTeamTwo: ['salah', 'ali'] },
    //   { id: 4, scoreOne: 8, scoreTwo: 0, teamOne: 'BAYERN', teamTwo: 'FCB', playersTeamOne: ['messi', 'Anas'], playersTeamTwo: ['salah', 'ali'] }
    // ];


    return { players,}; //matchs                    };

  }


}