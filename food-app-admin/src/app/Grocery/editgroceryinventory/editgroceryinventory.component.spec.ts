import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgroceryinventoryComponent } from './editgroceryinventory.component';

describe('EditgroceryinventoryComponent', () => {
  let component: EditgroceryinventoryComponent;
  let fixture: ComponentFixture<EditgroceryinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgroceryinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgroceryinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
