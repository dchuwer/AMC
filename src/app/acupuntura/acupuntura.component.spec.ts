import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunturaComponent } from './acupuntura.component';

describe('AcupunturaComponent', () => {
  let component: AcupunturaComponent;
  let fixture: ComponentFixture<AcupunturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
