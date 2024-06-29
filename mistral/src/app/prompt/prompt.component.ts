import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule],
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

  // prompt_update(event: any) {
  //   if (event.target.value) {
  //     this.prompt = event.target.value;
  //     console.log('prompt_update: prompt', this.prompt);
  //     this.apiService.get_chat_response(this.prompt).then((data) => {
  //       this.prompt_response = JSON.stringify(data);
  //     });
  //   }
  // }

  // prompt_update(event: any) {
  //   if (event.target.value) {
  //     this.prompt = event.target.value;
  //     console.log('prompt_update: prompt', this.prompt);
  //     this.apiService.get_chat_response(this.prompt).then((data) => {
  //       this.prompt_response = JSON.stringify(data);
  //     });
  //   }
  // }

  prompt_update(event: any) {
    if (event.target.value) {
      this.prompt = event.target.value;
      console.log('user prompt: ', this.prompt);
      this.apiService
        .get_chat_response_2(this.prompt)
        .subscribe((data: any) => (this.prompt_response = data));
      console.log('mistral response:', this.prompt_response);
    }
  }
}
