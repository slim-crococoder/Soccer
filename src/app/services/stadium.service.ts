import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllStadiums() {
    return this.httpClient.get<{ message: string, stadiums: any }>(`${this.stadiumUrl}/allStadiums`);

  }
  getStadiumById(id: string) {
    return this.httpClient.get<{ stadium: any }>(`${this.stadiumUrl}/displayStadium/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  
  addStadium(stadium: any) {
    
    return this.httpClient.post(`${this.stadiumUrl}/addStadium`, stadium);
  }

  deleteStadium(id: string) {
    return this.httpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }

  editStadium(stadium:any){
    return this.httpClient.put(`${this.stadiumUrl}/editStadium/${stadium._id}`, stadium);

  }
}
