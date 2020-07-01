import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFishmeatInventoryComponent } from './edit-fishmeat-inventory.component';

describe('EditFishmeatInventoryComponent', () => {
  let component: EditFishmeatInventoryComponent;
  let fixture: ComponentFixture<EditFishmeatInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFishmeatInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFishmeatInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
