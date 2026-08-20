import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  capabilities = [
    {
      icon: '⚡',
      title: 'Full-Stack Web Applications',
      description: 'Responsive single-page applications built with Angular on the frontend and C# / .NET web APIs on the backend.'
    },
    {
      icon: '🎨',
      title: 'Custom UI & Layout Systems',
      description: 'Structured, mobile-friendly interfaces utilizing modern CSS Flexbox, Grid, Bootstrap, and custom design tokens.'
    },
    {
      icon: '🗄️',
      title: 'Database Logic & API Services',
      description: 'Structured data pipelines, optimized MS SQL Server schemas, stored procedures, and clean REST endpoints.'
    }
  ];

  skills = {
    languages: [
      'Advanced Java',
      'Spring Boot',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL'
    ],
    softSkills: [
      'Communication',
      'Time Management',
      'Problem-Solving'
    ],
    spokenLanguages: [
      'English',
      'Tamil'
    ]
  };

  internships = [
    {
      title: 'Full Stack Development Java',
      company: 'Vcodez',
      period: 'MAY 2025 – JULY 2025',
      description:
        'Gaining hands-on experience in full-stack development by building projects using Java, Spring Boot, HTML, CSS, JavaScript, and Angular. Working on APIs, MVC architecture, and front-end/back-end integration to create dynamic and responsive web applications.'
    },
    {
      title: 'Web Development',
      company: 'Edify Technology solution',
      period: 'JAN 2025 – FEB 2025',
      description:
        'Completed a web development internship focused on building responsive web apps using HTML, CSS, JavaScript, Java, and Spring Boot. Gained hands-on experience in API integration and MVC architecture.'
    }
  ];

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/Bharathvaj_V_Resume.pdf';
    link.download = 'Bharathvaj_V_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}