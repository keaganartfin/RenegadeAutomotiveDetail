// simply-book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimplyBookService {
  private apiKey = '57adc8b4afbe8699d91be0c2675f6091d3283168487b0d26b69ed6e26a035a13';
  private apiUrl = 'https://user-api.simplybook.me';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    const url = `${this.apiUrl}/login?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  // Add other API calls as needed
}



// private apiKey = '57adc8b4afbe8699d91be0c2675f6091d3283168487b0d26b69ed6e26a035a13';
// private apiSecret = '2869fc5097f9aa819cc301ae95631c88a4df5127e9bcc42535a39c0b88a05ade';
