import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  standalone: true,
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent {
  @Input() number!: number; // This allows the parent to send the number
}