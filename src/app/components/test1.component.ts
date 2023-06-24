import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  `,
  styles: [
  ]
})
export class Test1Component {

}
