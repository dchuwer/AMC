import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipnoterapiaComponent } from './hipnoterapia.component';

describe('HipnoterapiaComponent', () => {
  let component: HipnoterapiaComponent;
  let fixture: ComponentFixture<HipnoterapiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipnoterapiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipnoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
