import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.sass']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() text: String = ''

  constructor() { }

  ngOnInit(): void {
  }

}
