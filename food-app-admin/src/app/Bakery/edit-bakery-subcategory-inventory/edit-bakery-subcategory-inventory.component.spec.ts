import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBakerySubcategoryInventoryComponent } from './edit-bakery-subcategory-inventory.component';

describe('EditBakerySubcategoryInventoryComponent', () => {
  let component: EditBakerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<EditBakerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBakerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBakerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
