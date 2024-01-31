import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurant-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './restaurant-dashboard.component.html',
  styleUrl: './restaurant-dashboard.component.css'
})
export class RestaurantDashboardComponent {

}
