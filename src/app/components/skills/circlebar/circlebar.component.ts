import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circlebar',
  templateUrl: './circlebar.component.html',
  styleUrls: ['./circlebar.component.css']
})
export class CirclebarComponent {
  @Input() progress!: number;
}
