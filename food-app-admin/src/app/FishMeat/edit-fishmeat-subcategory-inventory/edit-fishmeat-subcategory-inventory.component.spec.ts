import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFishmeatSubcategoryInventoryComponent } from './edit-fishmeat-subcategory-inventory.component';

describe('EditFishmeatSubcategoryInventoryComponent', () => {
  let component: EditFishmeatSubcategoryInventoryComponent;
  let fixture: ComponentFixture<EditFishmeatSubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFishmeatSubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFishmeatSubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
