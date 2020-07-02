import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFishmeatInventoryComponent } from './add-fishmeat-inventory.component';

describe('AddFishmeatInventoryComponent', () => {
  let component: AddFishmeatInventoryComponent;
  let fixture: ComponentFixture<AddFishmeatInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFishmeatInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFishmeatInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
