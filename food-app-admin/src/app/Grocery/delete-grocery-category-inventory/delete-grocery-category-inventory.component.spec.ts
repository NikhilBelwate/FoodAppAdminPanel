import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroceryCategoryInventoryComponent } from './delete-grocery-category-inventory.component';

describe('DeleteGroceryCategoryInventoryComponent', () => {
  let component: DeleteGroceryCategoryInventoryComponent;
  let fixture: ComponentFixture<DeleteGroceryCategoryInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGroceryCategoryInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGroceryCategoryInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
