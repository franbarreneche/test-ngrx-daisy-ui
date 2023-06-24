import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4">
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <div class="mt-4 flex justify-around">
      <div class="basis-1/3">
        <div class="card w-96 bg-secondary text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cookies!</h2>
            <p>We are using cookies for no reason.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Accept</button>
              <button class="btn btn-ghost">Deny</button>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/3">
        <div class="card w-96 bg-secondary text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cookies!</h2>
            <p>We are using cookies for no reason.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Accept</button>
              <button class="btn btn-ghost">Deny</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `,
  styles: [
  ]
})
export class Test1Component {

}
