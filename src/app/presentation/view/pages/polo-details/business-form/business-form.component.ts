import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {

  @Input() form: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
