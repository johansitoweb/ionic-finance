import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPage } from './card.page';

describe('CardPage', () => {
  let component: CardPage;
  let fixture: ComponentFixture<CardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
