import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailByLetterComponent } from './pages/cocktail-by-letter/cocktail-by-letter.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { IngredientComponent } from './pages/ingedient/ingredient.component';

const routes: Routes = [
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'cocktails/:letter', component: CocktailByLetterComponent },
  { path: 'drinks/:id', component: DrinksComponent }, // Ruta para el componente "Drinks"
  { path: 'ingredient/:name', component: IngredientComponent }, // Ruta para el componente "Drinks"
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/cocktails' } // Ruta para cualquier otra URL no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
