import {Component, HostListener} from '@angular/core';

import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
  faCalculator,
  faChartSimple,
  faClipboard,
  faGear,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navegacao-lateral',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navegacao-lateral.component.html',
  styleUrl: './navegacao-lateral.component.scss'
})
export class NavegacaoLateralComponent {
  protected readonly faChartSimple = faChartSimple;
  protected readonly faCalculator = faCalculator;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faClipboard = faClipboard;
  protected readonly faGear = faGear;
  isMobile: boolean = window.innerWidth <= 1023;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 1023;
  }
}
