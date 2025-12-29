import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
    standalone: true,    
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [
    
    CommonModule ,RouterModule 
  ],
})

export class DashboardComponent {

   constructor(private router: Router) {}
//  sideImage: string = 'https://picsum.photos/600/400?random=10';
 
 
//  cards = [
//     {
//     title: 'New Arrivals',
//     description: 'Check out our latest products',
//     image: 'https://picsum.photos/400/300?random=11'
//   },
//     {
//       title: 'Best Sellers',
//       description: 'Our most popular items',
//       image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80'
//     },
//     {
//       title: 'Special Offers',
//       description: 'Exclusive deals for you',
//       image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80'
//     },
//     {
//       title: 'Gift Ideas',
//       description: 'Perfect gifts for everyone',
//       image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80'
//     }
//   ];

sideImage: string = 'https://picsum.photos/600/500?random=10';

  cards = [
    {
      title: 'New Arrivals',
      description: 'Discover the latest trends and styles',
      image: 'https://picsum.photos/400/300?random=11'
    },
    {
      title: 'Best Sellers',
      description: 'Most loved products by our customers',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
    },
    {
      title: 'Special Offers',
      description: 'Grab exciting deals and discounts',
      image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c'
    },
    // {
    //   title: 'Gift Ideas',
    //   description: 'Perfect gifts for every occasion',
    //   image: 'https://images.unsplash.com/photo-1503602642458-232111445657'
    // }
  ];
  


   logout() {
    // Clear authentication data
    localStorage.removeItem('token'); // or sessionStorage
    localStorage.clear();

    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
