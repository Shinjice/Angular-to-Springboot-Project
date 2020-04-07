import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public medewerkerAanmaken(user){
    return this.http.post("http://localhost:8082/api/medewerkers/",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8082/api/medewerkers/");
  }
  
  public deleteUser(id){
    return this.http.delete("http://localhost:8082/api/medewerkers/"+id);
  }
}
