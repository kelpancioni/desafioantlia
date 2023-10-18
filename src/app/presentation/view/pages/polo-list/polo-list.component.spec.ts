import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloListComponent } from './polo-list.component';

describe('PoloListComponent', () => {
  let component: PoloListComponent;
  let fixture: ComponentFixture<PoloListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoloListComponent]
    });
    fixture = TestBed.createComponent(PoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
