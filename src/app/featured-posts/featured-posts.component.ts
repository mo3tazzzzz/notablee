import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-posts',
  imports: [CommonModule],
  templateUrl: './featured-posts.component.html',
  styleUrl: './featured-posts.component.css'
})
export class FeaturedPostsComponent {
  posts = [
    {
      image: '/images/16.jpeg',
      category: 'Graphic Design',
      title: 'A Brief History of the FIFA World Cup Logo',
      author: 'Clem Onojeghuo'
    },
    {
      image: '/images/15.jpeg',
      category: 'Graphic Design',
      title: 'Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back',
      author: 'Alessandra Ortiz'
    },
    {
      image: '/images/14.jpeg',
      category: 'Photography',
      title: 'Fred Rowson directs film for Years and Years',
      author: 'Coby Gottlieb'
    },
    {
      image: '/images/13.jpeg',
      category: 'Illustration',
      title: 'M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas',
      author: 'Annie Leibovitz'
    },
    
  ];
}

  
