import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalCodeComponent } from './emotional-code.component';

describe('EmotionalCodeComponent', () => {
  let component: EmotionalCodeComponent;
  let fixture: ComponentFixture<EmotionalCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionalCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionalCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
