import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoLateralComponent } from './navegacao-lateral.component';

describe('NavegacaoLateralComponent', () => {
  let component: NavegacaoLateralComponent;
  let fixture: ComponentFixture<NavegacaoLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacaoLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
