import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monpetitponey',
  templateUrl: './monpetitponey.component.html',
  styleUrls: ['./monpetitponey.component.scss']
})
export class MonpetitponeyComponent implements OnInit {
  @Input() color: string;
  private colors:Array<string> = ['green', 'purple', 'orange', 'blue', 'yellow'];

  constructor() { }

  ngOnInit(): void {
    if(this.colors.indexOf(this.color) === -1) {
      this.color = '';
    }
  }

}
