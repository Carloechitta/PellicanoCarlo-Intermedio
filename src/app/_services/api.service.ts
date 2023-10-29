import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Drinks } from "../typing";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrlSearch = "https://www.thecocktaildb.com/api/json/v1/1/";
  constructor(private http: HttpClient) {}

  // Ricerca

  searchByF(firstLetter: string) {
    return this.http.get<Drinks>(
      this.baseUrlSearch + "search.php?f=" + firstLetter
    );
  }

  detailById(id: string) {
    return this.http.get<Drinks>(this.baseUrlSearch + "lookup.php?i=" + id);
  }
}
