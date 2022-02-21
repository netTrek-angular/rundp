import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTemplateOutletComponent } from './use-template-outlet.component';

describe('UseTemplateOutletComponent', () => {
  let component: UseTemplateOutletComponent;
  let fixture: ComponentFixture<UseTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseTemplateOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
