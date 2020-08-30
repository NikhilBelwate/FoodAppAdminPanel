import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryInventoryComponent } from './bakery-inventory.component';

describe('BakeryInventoryComponent', () => {
  let component: BakeryInventoryComponent;
  let fixture: ComponentFixture<BakeryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
