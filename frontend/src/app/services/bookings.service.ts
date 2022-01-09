import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  public index(): Observable<any> {
    return this.http.get<any>('api/bookings')
    .pipe(
      map((resp: any) => resp.response)
    );
  }

  public store(data: any): Observable<any> {
    return this.http.post<any>('api/bookings/', data)
      .pipe(
        map((resp: any) => resp.response)
      );
  }

}
