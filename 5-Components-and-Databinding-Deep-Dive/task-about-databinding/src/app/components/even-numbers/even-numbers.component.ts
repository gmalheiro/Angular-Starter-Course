import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-numbers',
  templateUrl: './even-numbers.component.html',
  styleUrls: ['./even-numbers.component.css']
})
export class EvenNumbersComponent implements OnInit {
  
  @Input() evenNumber : number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
