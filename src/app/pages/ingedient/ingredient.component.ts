import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingedient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  cocktail: any; 
  ingredient: any;
  ingredients: any[] = []; 
  cocktails: any[] = [];


  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const ingredientName = params.get('name');
      if (ingredientName !== null) {
        this.ingredient = ingredientName;
        this.loadCocktailsByIngredient(ingredientName);
      }
    });
  }
  
  loadCocktailsByIngredient(ingredient: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    this.http.get<any>(url).subscribe(data => {
      this.cocktails = data.drinks;
    });
  }

  getIngredientThumbnail(ingredient: string) {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`;
  }

  getCocktailThumbnail(thumbnailUrl: string) {
    return thumbnailUrl + '/preview';
  }

  navigateToDrink(drinkId: string) {
    this.router.navigate(['/drinks', drinkId]);
  }

}
