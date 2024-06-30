import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ENDPOINT = 'http://localhost:3000/api';

  async get_test_response() {
    return this.http.get(this.ENDPOINT);
  }

  get_chat_response_2(prompt: string) {
    return this.http.post(this.ENDPOINT, { prompt: prompt });
  }
}
