import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShopComponent } from './select-shop.component';

describe('SelectShopComponent', () => {
  let component: SelectShopComponent;
  let fixture: ComponentFixture<SelectShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
