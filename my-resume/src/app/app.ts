import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import type { Experience } from './components/experience/experience';
import type { Education } from './components/education/education';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly name = signal('Scott Peter');
  protected readonly title = signal('Full Stack Developer');
  protected readonly email = signal('scottmpeter@gmail.com');
  protected readonly phone = signal('(713) 306-9859');
  protected readonly location = signal('Kingwood, Texas');
  protected readonly summary = signal(
    'Experienced developer with a passion for building scalable web applications and solving complex problems.'
  );

  protected readonly experiences: Experience[] = [
    {
      title: 'Solutions Architect',
      company: 'Insperity',
      period: '2024 - Present',
      description: 'Led development of multiple full-stack applications using Angular and Node.js'
    },
    {
      title: 'Full Stack Developer',
      company: 'Insperity',
      period: '2012 - 2024',
      description: 'Developed and maintained web applications, improved performance by 40%'
    }
  ];

  protected readonly education: Education[] = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Central Florida',
      year: '2008'
    }
  ];

  protected readonly skills: string[] = [
    'Angular',
    'TypeScript',
    'RXJS',
    'JavaScript',
    'HTML/CSS',
    'SQL',
    'Git',
    'REST APIs',
    'Agile',
    'C#',
    'Azure'
  ];
}
