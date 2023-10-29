import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../_services/drink.service";
import { Drink } from "../typing";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];
  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.drinkService.getElencoDrinks("a").subscribe((response) => {
      this.drinks = response.drinks;
    });
  }

  ricercaPerLettera() {
    const ricerca = document.getElementById("ricerca") as HTMLInputElement;
    this.drinkService.getElencoDrinks(ricerca.value).subscribe((response) => {
      this.drinks = response.drinks;
    });
  }
}
