import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerySubcategoryInventoryComponent } from './bakery-subcategory-inventory.component';

describe('BakerySubcategoryInventoryComponent', () => {
  let component: BakerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<BakerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
