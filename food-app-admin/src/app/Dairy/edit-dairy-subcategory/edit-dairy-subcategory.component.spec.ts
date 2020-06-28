import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDairySubcategoryComponent } from './edit-dairy-subcategory.component';

describe('EditDairySubcategoryComponent', () => {
  let component: EditDairySubcategoryComponent;
  let fixture: ComponentFixture<EditDairySubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDairySubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDairySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
