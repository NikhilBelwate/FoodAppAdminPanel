import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGrocerySubcategoryInventoryComponent } from './delete-grocery-subcategory-inventory.component';

describe('DeleteGrocerySubcategoryInventoryComponent', () => {
  let component: DeleteGrocerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<DeleteGrocerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGrocerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGrocerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
