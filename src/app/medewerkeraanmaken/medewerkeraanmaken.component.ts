import { Component, OnInit } from '@angular/core';
import { Medewerker } from '../medewerker';
import { UserRegistationService } from '../medewerker-aanmaken.service';


@Component({
  selector: 'app-medewerkeraanmaken',
  templateUrl: './medewerkeraanmaken.component.html',
  styleUrls: ['./medewerkeraanmaken.component.css']
})
export class AanmakenComponent implements OnInit {


  medewerker: Medewerker = new Medewerker(0,"","","","","","",);
  message:any;

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }
  

  public registerMedewerker(){
let resp=this.service.medewerkerAanmaken(this.medewerker);
resp.subscribe((data)=>this.message=data);
  }

}
