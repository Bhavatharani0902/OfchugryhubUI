import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}