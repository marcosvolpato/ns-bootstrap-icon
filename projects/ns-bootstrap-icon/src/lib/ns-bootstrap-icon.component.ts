import { Component, Input } from '@angular/core';


@Component({
  selector: 'ns-icon',
  template: `
    <svg class="bi" fill="currentColor" *ngIf="name">
      <use [attr.xlink:href]="'assets/bootstrap-icons.svg#' + name"/>
    </svg>
  `,
  styles: ['svg { width: 1em; height: 1em; }'],
})
export class NsBootstrapIconComponent {
  @Input() name: string;
}
