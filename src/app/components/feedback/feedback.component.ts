import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  submitFeedback(form: NgForm) {
    console.log('Feedback submitted:', form.value);
    alert('Thank you for your feedback!');
    form.reset();
  }
}
