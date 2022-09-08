import { Component, Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circlebar',
  templateUrl: './circlebar.component.html',
  styleUrls: ['./circlebar.component.css']
})
export class CirclebarComponent implements OnInit {
  public scrollProgress: any;

  @Input() progress!: number;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.scrollProgress = document.getElementById('progress');
    this.scrollProgress.style.background = `conic-gradient(#008fff ${this.progress}%, #f2f2f4 ${this.progress}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

}
