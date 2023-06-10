import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  cocktail: any; // Define la interfaz adecuada para los datos del cóctel
  ingredients: any[] = []; // Define la interfaz adecuada para los datos de los ingredientes
  cocktails: any[] = [];

  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const drinkId = params.get('id');
      if (drinkId !== null) {
        this.loadDrinkDetails(drinkId);
      }
    });
  }

  loadDrinkDetails(drinkId: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    this.http.get<any>(url).subscribe(data => {
      this.cocktail = data.drinks[0];
      this.loadIngredients();
    });
  }

  loadIngredients() {
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.cocktail['strIngredient' + i];
      if (ingredient) {
        this.ingredients.push({
          strIngredient: ingredient,
          strIngredientThumb: this.getIngredientThumbnail(ingredient)
        });
      }
    }
  }


  getIngredientThumbnail(ingredient: string) {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`;
  }

  getCocktailThumbnail(thumbnailUrl: string) {
    return thumbnailUrl + '/preview';
  }

  navigateToIngredient(ingredient: string) {
    this.router.navigate(['/ingredient', ingredient]);
  }
  

}
