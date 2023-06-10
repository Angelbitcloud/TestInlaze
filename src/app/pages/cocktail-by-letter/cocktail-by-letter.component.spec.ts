import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailByLetterComponent } from './cocktail-by-letter.component';

describe('CocktailByLetterComponent', () => {
  let component: CocktailByLetterComponent;
  let fixture: ComponentFixture<CocktailByLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailByLetterComponent]
    });
    fixture = TestBed.createComponent(CocktailByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
