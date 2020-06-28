import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyInventoryComponent } from './dairy-inventory.component';

describe('DairyInventoryComponent', () => {
  let component: DairyInventoryComponent;
  let fixture: ComponentFixture<DairyInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
