import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfcnpjValidator } from '../view/shared/utils/cpfcnpjValidator';
import { UfValidator } from '../view/shared/utils/ufValidator';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderControllerService {

  constructor(
    private readonly fb: FormBuilder,
    private cpfCnpjValidator: CpfcnpjValidator,
    private ufValidator: UfValidator
  ) { }

  buildForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      valuation: ['', Validators.required],
      active: ['', Validators.required],
      cep: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.compose([v => this.cpfCnpjValidator.validaCpfCnpj(v.value) ? null : {cpferror: 'CPF Inválido'}])]],
      logradouro: ['', [Validators.pattern("[a-zA-Z0-9 ]*")]],
      localidade: ['', [Validators.pattern("[a-zA-Z0-9 ]*")]],
      bairro: ['', [Validators.pattern("[a-zA-Z0-9 ]*")]],
      uf: ['', [Validators.compose([v => this.ufValidator.ufValidator(v.value)])]],
    })
  }
}

