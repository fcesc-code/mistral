import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.sass',
})
export class PromptComponent {
  apiService: ApiService = inject(ApiService);
  response = '';
  prompt = '';
  prompt_response = '';

  constructor() {
    this.apiService.get_test_response().then((data) => {
      this.response = JSON.stringify(data);
    });
  }

  prompt_update(event: any) {
    if (event.target.value) {
      this.prompt = event.target.value;
      console.log('user prompt: ', this.prompt);
      this.apiService.get_chat_response_2(this.prompt).subscribe({
        next: (data: any) => (this.prompt_response = data),
        error: (error: any) => console.error('mistral error:', error),
      });
      console.log('mistral response:', this.prompt_response);
    }
  }
}
