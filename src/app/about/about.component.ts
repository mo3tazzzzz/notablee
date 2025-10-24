import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  articles = [
    {
      image: '/images/20.jpg',
      author: 'Simeon Peterson',
      jop: 'Cofounder, Editor in Chief'
      
      
    },
    {
      image: '/images/21.jpg',
      author: 'Simeon Brekke',
      jop: 'Cofounder, Partner'
      
      
    },
    {
      image: '/images/22.jpg',
      author: 'Annie Lueilwitz',
      jop: 'Managing Editor'
      
      
    },
    {
      image: '/images/23.jpg',
      author: 'Reta Torphy',
      jop: 'Managing Editor'
      
      
    },
    {
      image: '/images/24.jpg',
      author: 'Leo Bartell',
      jop: 'Editor'
      
      
    },
    {
      image: '/images/25.jpg',
      author: 'Clem Onojeghuo',
      jop: 'Senior Writer'
      
      
    },
    {
      image: '/images/26.jpg',
      author: 'Michal Legros',
      jop: 'Senior Writer'
      
      
    },
    {
      image: '/images/27.jpg',
      author: 'Rosanna Ondricka',
      jop: 'Writer'
      
      
    },
    {
      image: '/images/28.jpg',
      author: 'Alessandra Ortiz',
      jop: 'Writer'
      
      
    },
    {
      image: '/images/29.jpg',
      author: 'Coby Gottlieb',
      jop: 'Writer'
      
      
    },
  ]

}
