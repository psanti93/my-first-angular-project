import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-team-list',
  templateUrl: './sales-team-list-bootstrap.component.html',
  styleUrls: ['./sales-team-list.component.css']
})
export class SalesTeamListComponent implements OnInit {

  //create an array of sales person object
  salesPersonList: SalesPerson[] =[
    new SalesPerson("Michael", "Scott", "michael.scott@dundlermifflen.com", 50000),
    new SalesPerson("Jim", "Halpert", "jim.halpert@dundermifflen.com", 40000),
    new SalesPerson("Dwight", "Schrute", "dwight.schrute@dundermifflen.com", 40000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
