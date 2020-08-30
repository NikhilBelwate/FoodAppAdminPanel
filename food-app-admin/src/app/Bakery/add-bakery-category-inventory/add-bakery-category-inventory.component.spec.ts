import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBakeryCategoryInventoryComponent } from './add-bakery-category-inventory.component';

describe('AddBakeryCategoryInventoryComponent', () => {
  let component: AddBakeryCategoryInventoryComponent;
  let fixture: ComponentFixture<AddBakeryCategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBakeryCategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBakeryCategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
