import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cartitem } from '../../Models/cartitem';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
  usercart: Cartitem[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.getUserCart();
  }

  getUserCart() {
    this.http
      .get<Cartitem[]>('http://localhost:5145/api/cart')
      .subscribe(
        (response) => {
          this.usercart = response;
          console.log(this.usercart);
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }
}
