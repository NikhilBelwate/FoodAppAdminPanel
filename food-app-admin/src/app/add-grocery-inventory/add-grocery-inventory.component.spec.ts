import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryInventoryComponent } from './add-grocery-inventory.component';

describe('AddGroceryInventoryComponent', () => {
  let component: AddGroceryInventoryComponent;
  let fixture: ComponentFixture<AddGroceryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroceryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
