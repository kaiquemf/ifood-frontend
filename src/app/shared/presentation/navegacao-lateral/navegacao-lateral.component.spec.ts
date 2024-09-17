import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaLateralComponent } from './navegacao-lateral.component';

describe('NavegacaLateralComponent', () => {
  let component: NavegacaLateralComponent;
  let fixture: ComponentFixture<NavegacaLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacaLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
