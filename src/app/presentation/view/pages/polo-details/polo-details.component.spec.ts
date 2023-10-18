import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloDetailsComponent } from './polo-details.component';

describe('PoloDetailsComponent', () => {
  let component: PoloDetailsComponent;
  let fixture: ComponentFixture<PoloDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoloDetailsComponent]
    });
    fixture = TestBed.createComponent(PoloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
