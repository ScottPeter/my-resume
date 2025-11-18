import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  name = input.required<string>();
  title = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();
  location = input.required<string>();
}
