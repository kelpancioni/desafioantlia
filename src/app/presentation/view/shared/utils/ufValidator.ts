import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UfValidator {


  private ufList = [
    "RO",
    "AC",
    "AM",
    "RR",
    "PA",
    "AP",
    "TO",
    "MA",
    "PI",
    "CE",
    "RN",
    "PB",
    "PE",
    "AL",
    "SE",
    "BA",
    "MG",
    "ES",
    "RJ",
    "SP",
    "PR",
    "SC",
    "RS",
    "MS",
    "MT",
    "GO",
    "DF",
  ]

  ufValidator(uf: string) {
    if (this.ufList.find(e => e === uf)) {
      return null
    } else {
      return {error: 'UF Inválido'}
    }
  }
}
