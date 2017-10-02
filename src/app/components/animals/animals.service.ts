import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Animals } from './animals'
import { ANIMALS } from './animalData'

const endpoint = 'assets/json/animals.json';
@Injectable()
export class AnimalsService {

  constructor(private http: Http) { }
    selectedItems: Animals[] = ANIMALS;
    getList(): Animals[] {
    return ANIMALS;
      }
      getSelectedItems(name:string): Animals {
        let item = this.selectedItems.find(ob => ob.name === name);
        return item;
      }	
      createAnimal(animal:Animals):void{
        let item = ANIMALS.find(ob => ob.name === animal.name);
        if (this.selectedItems.indexOf(item) < 0) {	   
          this.selectedItems.push(animal);
          console.log('New: Animal Added')
        }
        else{
          console.log('Error: Name Already Exists')
        }
      }
      removeItem(name:string): void {
        let item = this.selectedItems.find(ob => ob.name === name);
        let itemIndex = this.selectedItems.indexOf(item);
        this.selectedItems.splice(itemIndex, 1);
        console.log('Removed: Animal Removed')
      }
      updateItem(name:string, quantity:number): void {
        let item = this.selectedItems.find(ob => ob.name === name);
        // console.log(this.selectedItems)
        // console.log(item)
        item.quantity = quantity;
        // console.log(item)
        if (item) {	 
          let itemIndex = this.selectedItems.indexOf(item);
          this.selectedItems.splice(itemIndex, 1);  
          this.selectedItems.push(item);
          console.log('Updated: Animal Updated')
        }
        else{
          console.log('Error: Incorrect Name')
        }
      }
      

}