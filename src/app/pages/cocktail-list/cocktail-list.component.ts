import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkIT } from 'src/app/interface/drink.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: DrinkIT[] = []; // Arreglo que almacenará los cócteles de la pantalla principal
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetter: string | null = null;


  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.loadAllCocktails(); // Cargar los cócteles al iniciar el componente
  }

  loadAllCocktails() {
    this.cocktails = []; // Limpiar el arreglo de cócteles
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    alphabet.split('').forEach(letter => {
      this.searchByLetter(letter);
    });
  }
  
  searchByLetter(letter: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    this.http.get<any>(url).subscribe(data => {
      if (data && data.drinks) {
        this.cocktails.push(...data.drinks);
      }
    });
  }

  /**
   * Obtiene la URL de la miniatura del cóctel según su URL original.
   * @param thumbnailUrl La URL original de la imagen.
   * @returns La URL de la miniatura del cóctel.
   */
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


