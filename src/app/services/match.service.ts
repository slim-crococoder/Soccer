import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // matchsUrl = 'api/matchs';

  // getAllMatch() {
  //   return this.httpClient.get(`${this.matchsUrl});

  // }



  // url de base mta3 base de donné reel 
  matchsUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllMatch() {
    return this.httpClient.get<{ message: string, matches: any }>(`${this.matchsUrl}/allMatches`);

  }

  deleteMatch(id: string) {
    return this.httpClient.delete(`${this.matchsUrl}/deleteMatch/${id}`);
  }
  addMatch(match: any, image: File) {
    let formData = new FormData();
    formData.append('teamOne', match.teamOne);
    formData.append('teamTwo', match.teamTwo);
    formData.append('scoreOne', match.scoreOne);
    formData.append('scoreTwo', match.scoreTwo);
    formData.append('image', image);
    return this.httpClient.post(`${this.matchsUrl}/addMatch`, formData);
  }
  editMatch(match: any) {
    return this.httpClient.put(`${this.matchsUrl}/editMatch/${match._id}`, match);
  }
  getMatchById(id: string) {
    return this.httpClient.get<{ match: any }>(`${this.matchsUrl}/displayMatch/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  searchMatch(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.matchsUrl}/api/search/${term}`)
  }

}
