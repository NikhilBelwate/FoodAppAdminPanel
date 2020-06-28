import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairySubcategoryInventoryComponent } from './dairy-subcategory-inventory.component';

describe('DairySubcategoryInventoryComponent', () => {
  let component: DairySubcategoryInventoryComponent;
  let fixture: ComponentFixture<DairySubcategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairySubcategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairySubcategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
