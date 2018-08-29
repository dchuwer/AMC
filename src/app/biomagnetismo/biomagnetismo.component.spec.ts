import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomagnetismoComponent } from './biomagnetismo.component';

describe('BiomagnetismoComponent', () => {
  let component: BiomagnetismoComponent;
  let fixture: ComponentFixture<BiomagnetismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiomagnetismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiomagnetismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
