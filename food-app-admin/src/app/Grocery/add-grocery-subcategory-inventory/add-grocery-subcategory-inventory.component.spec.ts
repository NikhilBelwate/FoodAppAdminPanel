import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrocerySubcategoryInventoryComponent } from './add-grocery-subcategory-inventory.component';

describe('AddGrocerySubcategoryInventoryComponent', () => {
  let component: AddGrocerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<AddGrocerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrocerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrocerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
