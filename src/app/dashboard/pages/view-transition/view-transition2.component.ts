import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2"/>

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300">
      <div class="bg-blue-500 w-56 h-56"></div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
