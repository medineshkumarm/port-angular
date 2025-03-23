import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-contact',
  templateUrl: './reactive-contact.component.html',
  styleUrl: './reactive-contact.component.css',
})
export class ReactiveContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Reactive form submitted:', this.contactForm.value);
      alert('Message sent!');
      this.contactForm.reset();
    }
  }
}
