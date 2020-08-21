import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// TODO 5: Implement the 'onSubmit' function which will be called on form submition.
	// This function should reset the form.
	onSubmit(form: NgForm) {
		console.log(form);
		form.reset();
	}
}
