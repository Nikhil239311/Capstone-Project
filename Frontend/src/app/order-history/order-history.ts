import { Component, Inject, PLATFORM_ID, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService, Order, Product } from '../auth/auth';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.scss'],
})
export class OrderHistory implements OnInit {
  orders: Order[] = [];
  loading = true;
  loginMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.loading = false;
      return;
    }

    const userId = this.authService.getUserId();

    if (!userId) {
      this.loginMessage = 'Please login to view orders';
      this.loading = false;
      this.cdr.detectChanges();
      return;
    }

    this.loading = true; // important: show loading while fetching

    this.authService.getOrdersByUser(userId).subscribe({
      next: (data) => {
        this.orders = data;
        this.loginMessage = null; // reset
        this.loading = false;
        this.cdr.detectChanges(); // update UI after fetch
      },
      error: () => {
        this.loginMessage = 'Failed to load orders';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
