import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishmeatInventoryComponent } from './fishmeat-inventory.component';

describe('FishmeatInventoryComponent', () => {
  let component: FishmeatInventoryComponent;
  let fixture: ComponentFixture<FishmeatInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishmeatInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishmeatInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
