import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-about',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  team = [
    { name: 'Alice Johnson', role: 'CEO', image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80' },
    { name: 'Michael Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sophie Lee', role: 'Marketing Head', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80' },
    { name: 'David Brown', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a7?auto=format&fit=crop&w=400&q=80' },
  ];

  coreValues = [
    { title: 'Innovation', description: 'We constantly innovate to improve the shopping experience.' },
    { title: 'Integrity', description: 'We maintain transparency and honesty in all our dealings.' },
    { title: 'Customer Focus', description: 'Our customers are at the heart of everything we do.' },
    { title: 'Sustainability', description: 'We strive to make sustainable choices for a better future.' },
  ];
}
