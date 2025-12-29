import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
   standalone: true, 
  imports: [CommonModule,FormsModule],
 templateUrl: './login.html', 
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  login = {
    email: '',
    password: ''
  };

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router  
  ) {}

  onLogin(form: NgForm): void {
    if (form.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.loginUser(this.login).subscribe({
      next: (res) => {
        this.loading = false;

        // Store token if API returns it
        if (res.token) {
          localStorage.setItem('token', res.token);
        }

        this.successMessage = 'Login successful!';

        // 🚀 Redirect to dashboard
        this.router.navigate(['/dashboard']);

        form.reset();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Login failed';
      }
    });
  }
}
