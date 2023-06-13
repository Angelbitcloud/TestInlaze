import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksComponent } from './drinks/drinks.component';
import { SharedModule } from '../shared/shared.module';
import { IngredientComponent } from './ingedient/ingredient.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DrinksComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports:[
    MatPaginatorModule
  ]
})
export class PagesModule { }
