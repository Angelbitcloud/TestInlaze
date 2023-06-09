import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  exports: [
    ButtonModule,
    CardModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimengModule { }
