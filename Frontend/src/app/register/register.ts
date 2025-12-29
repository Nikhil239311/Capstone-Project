import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, RegisterRequest } from '../auth/auth';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
    standalone: true,  
      imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent implements OnInit {
 registerForm!: FormGroup;

  fields = [
    {name: 'name', label: 'First Name', type: 'text'},
    {name: 'lastName', label: 'Last Name', type: 'text'},
    {name: 'email', label: 'Email', type: 'email'},
    {name: 'password', label: 'Password', type: 'password'},
    {name: 'contact', label: 'Contact Number', type: 'text'}
  ];
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router  ) {}

  ngOnInit(): void {
    const group: { [key: string]: any } = {};
this.fields.forEach(f => {
  group[f.name] = ['', Validators.required];
});
this.registerForm = this.fb.group(group);

  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const registerData: RegisterRequest = this.registerForm.value;

      this.authService.registerUser(registerData).subscribe({
        next: (res) => {
          this.loading = false;
          this.successMessage = 'Registration successful! Please login.';
             this.router.navigate(['/login']);
          this.registerForm.reset();
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || 'Registration failed';
        }
      });
    }
  }
}
