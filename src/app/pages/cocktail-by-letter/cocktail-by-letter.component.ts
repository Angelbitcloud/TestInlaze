import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DrinkIT } from 'src/app/interface/drink.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-by-letter',
  templateUrl: './cocktail-by-letter.component.html',
  styleUrls: ['./cocktail-by-letter.component.css']
})
export class CocktailByLetterComponent implements OnInit, OnDestroy {
  letter: string = '';
  cocktails: DrinkIT[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetter: string | null = null;
  private routeSub?: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.letter = params['letter'];
      this.searchByLetter(this.letter);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  searchByLetter(letter: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    this.http.get<any>(url).subscribe(data => {
      this.cocktails = data.drinks;
    });
  }

  getCocktailThumbnail(thumbnailUrl: string) {
    return thumbnailUrl + '/preview';
  }

  navigateToCocktailsByLetter(letter: string) {
    this.selectedLetter = letter;
    this.router.navigate(['/cocktails', letter]);
  }
  
  navigateToDrink(drinkId: string) {
    this.router.navigate(['/drinks', drinkId]);
  }
}
