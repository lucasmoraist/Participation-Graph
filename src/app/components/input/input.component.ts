import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() type: String = ''
  @Input() text: String = ''

  constructor() { }

  ngOnInit(): void {
  }

}
