import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { AnimalsService } from "../animals/animals.service";
import { Animals } from "../animals/animals";

@Component({
  selector: 'animal-description',
  templateUrl: './animal-description.component.html',
  styleUrls: ['./animal-description.component.css'],
  providers:[AnimalsService]
})
export class AnimalDescriptionComponent implements OnInit {
  title = "Animals - Description Interface";
  private req:any;
  private routeSub:any;
  name:string;
  animals:Animals;

  constructor(private route: ActivatedRoute, private _animals: AnimalsService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.name = params['name']
      this.animals = this._animals.getSelectedItems(this.name)
      console.log(this.animals)
      // this.req = this._animals.getFilteredList(this.name).subscribe(data => {
      //   this.animals = data as Animals
      // })
    })
  }

}

