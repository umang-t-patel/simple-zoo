import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimalsService } from "../animals/animals.service";
import { Animals } from "../animals/animals";
@Component({
  selector: 'blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  providers:[AnimalsService]
})
export class BlocksComponent implements OnInit {
  title = "Animals - Block Interface";
  req:any;
  animalsList:Animals[];
  classAk = "name";
  name:string;
  quantity:number;
  

  constructor(private _animals:AnimalsService) { }

  ngOnInit() {
    this.animalsList = this._animals.getList()
  }
  updateAnimal(event,form){
    this.name = form.value['name']
    this.quantity = form.value['quantity']
    if(form.value['quantity'] != 0){
      this._animals.updateItem(this.name,this.quantity)
  } else
  {
    this._animals.removeItem(this.name)
  }    
    this.animalsList = this._animals.getList()
  }

}
