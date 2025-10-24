import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-posts',
  imports: [CommonModule,RouterLink],
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent {
  posts = [
    {
      image: '/images/1.jpeg',
      category: 'Illustration',
      title: 'Japan House Opens in Mountainside to Foster Peak Creativity.',
      author: 'Reta Torphy'
    },
    {
      image: '/images/2.jpg',
      category: 'Photography',
      title: 'Helmut Lang Celebrates Taxi Drivers Worldwide in Latest Campaign',
      author: 'Alessandra Ortiz'
    },
    {
      image: '/images/3.jpg',
      category: 'Photography',
      title: 'Bowlcut Launch a New Summer Collection that Pays Homage to “UK Legends”',
      author: 'Rosanna Ondricka'
    },
    {
      image: '/images/4.jpg',
      category: 'Photography',
      title: 'Thousands of Previously Unseen Photographs by Andy Warhol Will Be Made Public This Autumn',
      author: 'Annie Leibovitz'
    },
    {
      image: '/images/5.jpg',
      category: 'Illustration',
      title: 'Japan House Opens in Mountainside to Foster Peak Creativity.',
      author: 'Reta Torphy'
    },
    {
      image: '/images/6.jpg',
      category: 'Photography',
      title: 'Helmut Lang Celebrates Taxi Drivers Worldwide in Latest Campaign',
      author: 'Alessandra Ortiz'
    },
    {
      image: '/images/7.jpg',
      category: 'Photography',
      title: 'Bowlcut Launch a New Summer Collection that Pays Homage to “UK Legends”',
      author: 'Rosanna Ondricka'
    },
    {
      image: '/images/8.jpg',
      category: 'Photography',
      title: 'Thousands of Previously Unseen Photographs by Andy Warhol Will Be Made Public This Autumn',
      author: 'Annie Leibovitz'
    }
  ];
}
