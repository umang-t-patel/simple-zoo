import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimalsService } from "../animals/animals.service";
import { Animals } from "../animals/animals";
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnimalsService]
})
export class HomeComponent implements OnInit, OnDestroy {
  title = "Add Animals";
  req:any;
  output:any;
  animals:Animals;
  name: string;
  avgHeight: Number;
  avgWeight: Number;
  class: string;
  description: string;
  image: string;
  quantity: Number;
  constructor(private _animals:AnimalsService,private router:Router) { }

  ngOnInit() {
  }

  createAnimal(event, form){
    this.animals = form.value
    this._animals.createAnimal(this.animals)
      this.router.navigate(['/list'])    
  }

  ngOnDestroy(){
    if(this.req){
      this.req.unsubscribe()
    }
  }
}
