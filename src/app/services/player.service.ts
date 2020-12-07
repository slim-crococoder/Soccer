import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  // playerUrl='api/players'; (ki ne5dmo bil base de donné fake)
  playerUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get<{ message: string, players: any }>(`${this.playerUrl}/allPlayers`);
  }

  deletePlayers(id: string) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayers/${id}`);
  }

  addPlayer(player: any, image: File) {
    let formData = new FormData();
    formData.append('nom', player.nom);
    formData.append('prenom', player.prenom);
    formData.append('age', player.age);
    formData.append('poste', player.poste);
    formData.append('image', image);
    return this.httpClient.post(`${this.playerUrl}/addPlayers`, formData);
  }

  editPlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player._id}`, player);
  }
  getPlayerById(id: string) {
    return this.httpClient.get<{ player: any }>(`${this.playerUrl}/displayPlayers/${id}`);
  }
    // ki ne5dmo bil base de donné fake
// getAllPlayers(){
//  return this.httpClient.get(this.playerUrl);
// }

// deletePlayer(id:number){
//   return this.httpClient.delete(`${this.playerUrl}/${id}`);
// }

// addPlayer(player:any, image: File){
//   return this.httpClient.post(this.playerUrl,player);
// }
}
