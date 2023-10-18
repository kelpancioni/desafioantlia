import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloListTableComponent } from './polo-list-table.component';

describe('PoloListTableComponent', () => {
  let component: PoloListTableComponent;
  let fixture: ComponentFixture<PoloListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
