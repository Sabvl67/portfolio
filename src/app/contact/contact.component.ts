import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, ButtonModule, ImageModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  value: string|undefined;
  notificationMessage: string | null = null;


  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(e: Event) {
    e.preventDefault();

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .sendForm('service_2hzms68', 'template_lbn3vr9', e.target as HTMLFormElement, {
        publicKey: 'q1B6CwedVOJ6XwdqN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
