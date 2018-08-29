
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavtestComponent } from './navtest.component';

describe('NavtestComponent', () => {
  let component: NavtestComponent;
  let fixture: ComponentFixture<NavtestComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
