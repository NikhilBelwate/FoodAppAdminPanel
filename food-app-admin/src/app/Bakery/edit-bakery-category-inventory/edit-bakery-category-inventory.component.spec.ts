import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBakeryCategoryInventoryComponent } from './edit-bakery-category-inventory.component';

describe('EditBakeryCategoryInventoryComponent', () => {
  let component: EditBakeryCategoryInventoryComponent;
  let fixture: ComponentFixture<EditBakeryCategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBakeryCategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBakeryCategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
