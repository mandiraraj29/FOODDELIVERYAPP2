import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  razorpayPayment$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  makePayment(amount: number) {
    const url = `${environment.baseURL}/razorpay-payment`;

    return this.http.post(url, { amount });
  }
}
