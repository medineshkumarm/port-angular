import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // You can optionally use variables here if you want dynamic data.
  email = 'jaimurugan131003@gmail.com';
  phone = '+1 234 567 890';
  instagram = 'yourprofile';
  twitter = 'yourprofile';
  linkedin = 'yourprofile';
}
