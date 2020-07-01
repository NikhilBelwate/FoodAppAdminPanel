import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishmeatSubcategoryInventoryComponent } from './fishmeat-subcategory-inventory.component';

describe('FishmeatSubcategoryInventoryComponent', () => {
  let component: FishmeatSubcategoryInventoryComponent;
  let fixture: ComponentFixture<FishmeatSubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishmeatSubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishmeatSubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
