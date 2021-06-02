import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShoppingComponent } from './list-shopping.component';

describe('ListShoppingComponent', () => {
  let component: ListShoppingComponent;
  let fixture: ComponentFixture<ListShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
