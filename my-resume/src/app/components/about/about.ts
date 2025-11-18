import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  summary = input.required<string>();
}
