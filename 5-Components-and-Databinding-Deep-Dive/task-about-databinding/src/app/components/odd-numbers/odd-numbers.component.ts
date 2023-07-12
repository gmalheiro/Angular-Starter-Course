import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-numbers',
  templateUrl: './odd-numbers.component.html',
  styleUrls: ['./odd-numbers.component.css']
})
export class OddNumbersComponent implements OnInit {

  @Input() oddNumber : number;

  constructor() { }

  ngOnInit(): void {
  }

}
