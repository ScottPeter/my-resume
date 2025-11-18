import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  education = input.required<Education[]>();
}
