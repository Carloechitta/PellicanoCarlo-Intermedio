import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DrinkService } from "../_services/drink.service";
import { Drink } from "../typing";

type ObjectIngredient = {
  ingredient: string;
  measure: string;
}[];

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
  idDrink: string = "";
  drink!: Drink;
  ingredients: ObjectIngredient = [];
  languageInstructions: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idDrink = params["id"];
      this.drinkService
        .getDetailDrink(this.idDrink)
        .subscribe((response: any) => {
          this.drink = response.drinks[0];
          this.extractIngredients();
          this.languageInstructions = this.drink.strInstructions;
        });
    });
  }

  extractIngredients() {
    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if ((this.drink as any)[ingredientKey] !== null) {
        this.ingredients.push({
          ingredient: (this.drink as any)[ingredientKey],
          measure: (this.drink as any)[measureKey],
        });
      }
    }
  }

  changeLanguage(event: any, language: string) {
    event.preventDefault();
    switch (language) {
      case "german":
        this.languageInstructions = this.drink.strInstructionsDE;
        break;
      case "italian":
        this.languageInstructions = this.drink.strInstructionsIT;
        break;
      case "spanish":
        this.languageInstructions = this.drink.strInstructionsES;
        break;
      case "english":
        this.languageInstructions = this.drink.strInstructions;
        break;
      default:
        this.languageInstructions = this.drink.strInstructions;
        break;
    }
  }
}
