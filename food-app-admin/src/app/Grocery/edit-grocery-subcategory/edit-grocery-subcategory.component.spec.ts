import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrocerySubcategoryComponent } from './edit-grocery-subcategory.component';

describe('EditGrocerySubcategoryComponent', () => {
  let component: EditGrocerySubcategoryComponent;
  let fixture: ComponentFixture<EditGrocerySubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGrocerySubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrocerySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
