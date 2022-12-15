import {Injectable} from '@angular/core';
import {Food} from "../../shared/models/foods/Food";
import {sample_foods} from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {
  }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodByName(searchItem: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()));
  }


}
