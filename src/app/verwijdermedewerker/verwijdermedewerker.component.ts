import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../medewerker-aanmaken.service';

@Component({
  selector: 'app-verwijdermedewerker',
  templateUrl: './verwijdermedewerker.component.html',
  styleUrls: ['./verwijdermedewerker.component.css']
})
export class VerwijderComponent implements OnInit {

  medewerkers:any;
  
  
  constructor(private service:UserRegistationService) { }


public deleteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.medewerkers=data);
}
  
  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.medewerkers=data);
  }

}
