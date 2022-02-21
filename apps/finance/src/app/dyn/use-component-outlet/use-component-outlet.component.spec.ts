import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseComponentOutletComponent } from './use-component-outlet.component';

describe('UseComponentOutletComponent', () => {
  let component: UseComponentOutletComponent;
  let fixture: ComponentFixture<UseComponentOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseComponentOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseComponentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
