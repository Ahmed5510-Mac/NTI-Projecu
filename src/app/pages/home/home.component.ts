import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="ahmed darwish";
  yOfBirth:number=1993;
  calassName='c1';
  id=5;
  buton='.btn';
  status:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  getAge(){
    return 2012-this.yOfBirth
  }
  getErrs()
  {
    return this.status;
  }
  changestat(){
    this.status=!this.status;

  }

}
