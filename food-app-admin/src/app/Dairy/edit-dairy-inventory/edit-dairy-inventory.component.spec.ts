import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDairyInventoryComponent } from './edit-dairy-inventory.component';

describe('EditDairyInventoryComponent', () => {
  let component: EditDairyInventoryComponent;
  let fixture: ComponentFixture<EditDairyInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDairyInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDairyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
