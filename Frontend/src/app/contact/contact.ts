
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  startChat(): void {
    console.log('Starting chat...');
    // Add your chat integration logic here
    alert('Chat feature coming soon!');
  }
}