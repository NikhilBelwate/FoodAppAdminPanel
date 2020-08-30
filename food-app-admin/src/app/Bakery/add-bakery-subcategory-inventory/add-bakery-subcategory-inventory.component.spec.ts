import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBakerySubcategoryInventoryComponent } from './add-bakery-subcategory-inventory.component';

describe('AddBakerySubcategoryInventoryComponent', () => {
  let component: AddBakerySubcategoryInventoryComponent;
  let fixture: ComponentFixture<AddBakerySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBakerySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBakerySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
