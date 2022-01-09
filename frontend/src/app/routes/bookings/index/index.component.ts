import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/bookings.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  items: any;
  columnsToDisplay = ['bookingId', 'client', 'creationDate', 'address', 'price'];

  constructor(
    private bookingService: BookingService
  ) {
    this.index();
   }

  ngOnInit(): void {
  }

  index(){
    this.bookingService.index()
    .subscribe(
      (response: any) => {
        console.log('index() --> response', response);
        this.items = response;
      },
      (error: any) => {

      }
    )
  }

}
