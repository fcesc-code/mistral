import { Component, Output, EventEmitter } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [StepComponent],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.sass',
})
export class PromptComponent {
  response = '';
  name = '';
  age = '6';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
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
}
