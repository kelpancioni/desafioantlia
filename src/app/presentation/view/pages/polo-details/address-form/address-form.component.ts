import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CepEntity } from 'src/app/domain/entities/cep-entity';
import { ICepController } from 'src/app/domain/interfaces/controllers/icep-controller';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = []

  @Input() form: FormGroup

  cep: AbstractControl

  constructor(
    private cepController: ICepController
  ) { }

  ngOnInit(): void {
    this.cep = this.form.get('cep')

    this.getCep()
  }

  getCep() {
    this.subscriptions.push(
      this.cep.valueChanges.pipe(
        distinctUntilChanged(),
      ).subscribe(v => {
        if (this.cep.valid) {
          this.cepController.getCep(v).subscribe((cep: CepEntity) => {
            this.form.patchValue(cep)
          })
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(e => e.unsubscribe)
  }

}
