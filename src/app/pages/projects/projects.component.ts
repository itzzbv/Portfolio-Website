import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'BRUNT REVERSAL JUST-IN-TIME GLITCH PROPHECY',
      techStack: ['Java (J2EE)', 'MySQL', 'Apache Tomcat', 'QR Code Integration'],
      description: 'Developed a warehouse data management system designed to optimize storage, retrieval, and security of product data using unique QR-based identification. The system ensures efficient handling, real-time updates, and reduced data redundancy through improved database operations.',
      videoLink: 'https://drive.google.com/file/d/1N6_6J52Napguk3BxWBkilYF4XfhLt2eV/view?usp=sharing',
      rarLink: 'https://drive.google.com/file/d/1VWuvc10cg3Ddd0hO-wI6-FxMAOzGO8Ma/view?usp=drive_link',
      features: [
        'QR-based product identification',
        'Real-time data updates',
        'Optimized storage and retrieval',
        'Reduced data redundancy'
      ]
    },

    {
  title: 'Shakti Priya – Professional Anchor & VJ Portfolio',
  techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  description: 'Designed and developed a professional portfolio website for Anchor, VJ, and MC Shakti Priya, showcasing her profile, events, portfolio, brand collaborations, and professional presence.',
  liveLink: 'https://vj-shaktipriya.netlify.app/',
  features: [
    'Professional portfolio showcase',
    'Responsive modern UI',
    'Event hosting portfolio',
    'Brand collaboration section',
    'Interactive animations',
    'Contact and profile sections'
  ]
},
{
      title: 'Srinivasan Talent Solution - HR Portfolio',
      techStack: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Netlify'],
      description: 'A professional HR consulting and talent solutions platform designed for an HR consultant, showcasing recruiter expertise, talent acquisition strategies, client services, and consultation booking capabilities.',
      features: [
        'Responsive interactive user interface built with Angular component architecture',
        'Detailed HR services breakdown including recruitment, staffing, and corporate training',
        'Direct consultation request and client contact workflows',
        'Optimized for fast rendering and seamless deployment on Netlify'
      ],
      liveLink: 'https://srinivasan-talent-solution.netlify.app/'
    }
  ];
}