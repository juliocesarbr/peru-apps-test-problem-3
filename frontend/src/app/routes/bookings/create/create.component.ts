import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/bookings.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  disableBtn = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      bookingTime: ['', [Validators.required]],
      bookingPrice: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // console.log('onSubmit(): -->');
    this.disableBtn = true;
    this.submitted = true;

    // Stop here if form is invalid
    if (this.form.invalid) {
      this.disableBtn = false;
      console.log('onSubmit(): invalid form');
      return;
    }

    console.log('onSubmit(): valid form');
    this.store();
  }


  store(){
    this.bookingService.store(this.form.value)
    .subscribe(
      (response: any) => {
        console.log('store(): --> response:', response);
        this.disableBtn = false;
        this.submitted = false;

        // Redirect to test
        this.router.navigate(['/bookings/']);
      },
      (error: any) => {
        console.log('store(): --> error:', error);
        this.submitted = false;
        this.disableBtn = false;
      }
    );
  }

}
