import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MistralClient from '@mistralai/mistralai';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ENDPOINT = 'http://localhost:3000/api';

  async get_test_response() {
    const response = await fetch(this.ENDPOINT, {
      method: 'GET',
    });
    return response.json();
  }

  async get_chat_response(prompt: string) {
    console.log('INFO', prompt);
    const response = await fetch(this.ENDPOINT, {
      method: 'POST',
      body: prompt,
    });
    return response.json();
  }

  get_chat_response_2(prompt: string) {
    return this.http.post(this.ENDPOINT, { prompt: prompt });
  }
}
