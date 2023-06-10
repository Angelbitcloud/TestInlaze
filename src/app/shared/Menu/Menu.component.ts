import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  goToCocktails() {
    this.router.navigateByUrl('/cocktails');
  }
  

  ngOnInit() {
  }

}
