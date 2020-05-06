import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySubcategoryInventoryComponent } from './grocery-subcategory-inventory.component';

describe('GrocerySubcategoryInventoryComponent', () => {
  let component: GrocerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<GrocerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
