import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { BusinessEntity } from 'src/app/domain/entities/business-entity';
import { CepEntity } from 'src/app/domain/entities/cep-entity';
import { IBusinessController } from 'src/app/domain/interfaces/controllers/ibusiness-controller';
import { ICepController } from 'src/app/domain/interfaces/controllers/icep-controller';
import { FormBuilderControllerService } from 'src/app/presentation/controllers/form-builder-controller.service';

@Component({
  selector: 'app-polo-details',
  templateUrl: './polo-details.component.html',
  styleUrls: ['./polo-details.component.scss'],
})
export class PoloDetailsComponent implements OnInit {
  constructor(
    private businessController: IBusinessController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilderControllerService,
  ) {}

  subscriptions: Subscription[] = [];

  form: FormGroup;

  id: string
  businessName: string

  name: AbstractControl
  business: AbstractControl
  valuation: AbstractControl
  active: AbstractControl
  cep: AbstractControl
  cnpj: AbstractControl
  logradouro: AbstractControl
  localidade: AbstractControl
  bairro: AbstractControl
  uf: AbstractControl

  ngOnInit(): void {
    this.form = this.formBuilder.buildForm()

    this.name = this.form.get('name')
    this.business = this.form.get('business')
    this.valuation = this.form.get('valuation')
    this.active = this.form.get('active')
    this.cep = this.form.get('cep')
    this.cnpj = this.form.get('cnpj')
    this.logradouro = this.form.get('logradouro')
    this.localidade = this.form.get('localidade')
    this.bairro = this.form.get('bairro')
    this.uf = this.form.get('uf')

    this.subscriptions.push(
      this.route.paramMap
        .pipe(
          switchMap((params) => {
            this.id = params.get('id')
            return this.businessController.getBusinessById(parseInt(this.id))
          }),
        )
        .subscribe((business: BusinessEntity) => {
          this.form.patchValue(business)
          this.businessName = this.name.value
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((e) => {
      e.unsubscribe();
    });
  }

  onClickSalvar() {
    this.subscriptions.push(
      this.businessController.postBusiness(this.form.value).subscribe(console.log)
    )
  }
}
