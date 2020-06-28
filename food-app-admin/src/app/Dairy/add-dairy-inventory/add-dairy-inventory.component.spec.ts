import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDairyInventoryComponent } from './add-dairy-inventory.component';

describe('AddDairyInventoryComponent', () => {
  let component: AddDairyInventoryComponent;
  let fixture: ComponentFixture<AddDairyInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDairyInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDairyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
