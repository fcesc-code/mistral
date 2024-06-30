import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';
import { NewlineBreaker } from '../newline-breaker.pipe';
import { MarkdownBoldPipe } from '../markdown-bold.pipe';
@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NewlineBreaker, MarkdownBoldPipe],
  templateUrl: './step.component.html',
  styleUrl: './step.component.sass',
})
export class StepComponent {
  apiService: ApiService = inject(ApiService);
  response = '';
  prompt = '';
  prompt_response: string[] = [];
  response_received = false;
  nextLevel = false;

  @Input() name = '';
  @Input() age = '';

  @Output() newItemEvent = new EventEmitter<string>();

  update_prompt_response(response: any) {
    if (response != '') {
      // console.log('Response received from Mistral', response);
      let json_response = JSON.parse(response);
      // console.log('Parsed', json_response);
      // console.log('Parsed', json_response.paragraphs);
      this.response_received = true;
      this.prompt_response = json_response.paragraphs;
    }
  }

  prompt_update(event: any) {
    if (event.target.value) {
      this.prompt = event.target.value;
      // console.log('user prompt: ', this.prompt);
      this.apiService
        .get_chat_response_2(this.prompt, this.name, this.age)
        .subscribe({
          next: (data: any) =>
            this.update_prompt_response(JSON.stringify(data)),
          error: (error: any) => console.error('mistral error:', error),
        });
    }
  }

  continue_request() {
    this.nextLevel = true;
  }
}
