import { Component, Output, EventEmitter } from '@angular/core';
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
  name = '';
  age = 6;
  prompt_response = '';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() {
    this.apiService.get_test_response().then((data) => {
      this.response = JSON.stringify(data);
    });
  }

  update_prompt_response(response: string) {
    if (response != '' && response != 'None') {
      this.prompt_response = response;
    }
  }

  name_update(event: any) {
    if (event.target.value) {
      this.name = event.target.value;
      this.addNewItem(this.name);
    }
  }

  age_update(event: any) {
    if (event.target.value) {
      this.age = event.target.value;
    }
  }

  prompt_update(event: any) {
    if (event.target.value) {
      this.prompt = event.target.value;
      console.log('user prompt: ', this.prompt);
      this.apiService.get_chat_response_2(this.prompt).subscribe({
        next: (data: any) => this.update_prompt_response(JSON.stringify(data)),
        error: (error: any) => console.error('mistral error:', error),
      });
      console.log('mistral response:', this.prompt_response);
    }
  }
}
