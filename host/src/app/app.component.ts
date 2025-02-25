import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouteLoaderService } from './services/route-loader.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private routeLoader: RouteLoaderService, private router: Router) {}

  ngOnInit() {
    this.routeLoader.loadRoutes().subscribe({
      next: (routes) => {
       this.router.config = [...this.router.config, ...routes];
      },
      error: (err) => {
        console.error('Failed to load routes:', err);
      },
    });
  }
}
