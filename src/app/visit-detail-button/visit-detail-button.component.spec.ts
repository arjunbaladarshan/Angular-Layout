import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailButtonComponent } from './visit-detail-button.component';

describe('VisitDetailButtonComponent', () => {
  let component: VisitDetailButtonComponent;
  let fixture: ComponentFixture<VisitDetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitDetailButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
