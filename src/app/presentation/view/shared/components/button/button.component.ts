import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('t-label') label: string = ''
  @Input('t-color_style') color_style: string = ''
  @Input('t-large') large: boolean = false
  @Input('t-disabled') disabled: boolean = false

  @Output() clickEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClickEmitter() {
    this.clickEmitter.emit()
  }

}
