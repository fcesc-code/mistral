import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'mistral';
}
