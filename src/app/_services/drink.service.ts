import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DrinkService {
  constructor(private apiService: ApiService) {}

  getElencoDrinks(letter: string) {
    return this.apiService.searchByF(letter);
  }

  getDetailDrink(id: string) {
    return this.apiService.detailById(id);
  }
}
