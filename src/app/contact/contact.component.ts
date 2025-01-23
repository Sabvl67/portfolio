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
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_2hzms68', 'template_lbn3vr9', e.target as HTMLFormElement, {
        publicKey: 'q1B6CwedVOJ6XwdqN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
