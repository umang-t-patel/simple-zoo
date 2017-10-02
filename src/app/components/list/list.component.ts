import { Component, OnInit} from '@angular/core';
import { AnimalsService } from "../animals/animals.service";
import { SortByPipe } from '../../utilities/sort-by.pipe';
import { Animals } from "../animals/animals";
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[AnimalsService,SortByPipe]
})
export class ListComponent implements OnInit {
  title = "Animals - List Interface";
  req:any;
  checkclass:string = "";
  animalsList:Animals[];
  data:any;

  constructor(private _animals:AnimalsService, private sortby: SortByPipe) { }

  ngOnInit() {
    this.data = this._animals.getList()
    this.sortby.transform(this.data,"class")
    this.animalsList = this.data
  }
  checkAnimalKingdom(classak){
    if(classak != this.checkclass){
      // console.log(this.checkclass)
      this.checkclass = classak
      return true
    }else{
      return false
    }

  }

}
