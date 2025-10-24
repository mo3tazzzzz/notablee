import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPostsComponent } from '../latest-posts/latest-posts.component';
import { FeaturedPostsComponent } from '../featured-posts/featured-posts.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule,LatestPostsComponent,FeaturedPostsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = [
    {
      image: '/images/2.jpg',
      category: 'Photography',
      title: 'Helmut Lang celebrates taxi drivers worldwide in latest campaign',
      author: 'Alessandra Ortiz'
    },
    {
      image: '/images/3.jpg',
      category: 'Food & Drink',
      title: 'Bowlcut launch a new summer collection that pays homage to "UK legends"',
      author: 'Rosanna Ondricka'
    },
    {
      image: '/images/4.jpg',
      category: 'Photography',
      title: 'Thousands of previously unseen photographs by Andy Warhol will be made public this autumn',
      author: 'Annie Leibovitz'
    },
    {
      image: '/images/5.jpg',
      category: 'Interactive Design',
      title: 'London-based Yinka Ilori’s storytelling furniture',
      author: 'Annie Leibovitz'
    },
    {
      image: '/images/6.jpg',
      category: 'Graphic Design',
      title: 'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck',
      author: 'Simone Bridges'
    },
    {
      image: '/images/7.jpg',
      category: 'Architecture',
      title: 'Suzanne Saroff’s meticulously arranged photographs alter perceptions',
      author: 'Risa Torphy'
    }
    
  ];
}


