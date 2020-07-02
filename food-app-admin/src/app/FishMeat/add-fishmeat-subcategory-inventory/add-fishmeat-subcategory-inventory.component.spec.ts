import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFishmeatSubcategoryInventoryComponent } from './add-fishmeat-subcategory-inventory.component';

describe('AddFishmeatSubcategoryInventoryComponent', () => {
  let component: AddFishmeatSubcategoryInventoryComponent;
  let fixture: ComponentFixture<AddFishmeatSubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFishmeatSubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFishmeatSubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
