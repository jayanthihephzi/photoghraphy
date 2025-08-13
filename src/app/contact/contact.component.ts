import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    }
  }
}
