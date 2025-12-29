import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,        
  imports: [RouterModule], 
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
