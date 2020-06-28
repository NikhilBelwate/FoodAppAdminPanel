import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDairySubcategoryInventoryComponent } from './add-dairy-subcategory-inventory.component';

describe('AddDairySubcategoryInventoryComponent', () => {
  let component: AddDairySubcategoryInventoryComponent;
  let fixture: ComponentFixture<AddDairySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDairySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDairySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
