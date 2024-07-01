import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent {
  email = {
    to: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Email sent:', this.email);
    const mailtoLink = `mailto:${this.email.to}?subject=${encodeURIComponent(this.email.subject)}&body=${encodeURIComponent(this.email.message)}`;
    window.location.href = mailtoLink;
    // Here you can add your logic to send the email, e.g., through a service
  }

}
