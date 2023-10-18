import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusinessEntity } from 'src/app/domain/entities/business-entity';

@Component({
  selector: 'app-polo-list',
  templateUrl: './polo-list.component.html',
  styleUrls: ['./polo-list.component.scss'],
})
export class PoloListComponent implements OnInit {

  dataSource = new MatTableDataSource<BusinessEntity>([]);

  constructor() {}

  ngOnInit(): void {
  }

  setDataSource(event: MatTableDataSource<BusinessEntity>) {
    this.dataSource = event;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const MOCK_RESPONSE: BusinessEntity[] = [
  {
    id: 1,
    name: 'Itaú BBA',
    business: 'Financial Center',
    valuation: 850000000.5,
    active: true,
    cep: '04538-132',
    cnpj: 17298092000130,
  },
  {
    id: 2,
    name: 'Itaú Ceic',
    business: 'Centro Empresárial Itaú',
    valuation: 54000000.45,
    active: true,
    cep: '04308-000',
    cnpj: 60701190000104,
  },
  {
    id: 3,
    name: 'Cubo Itaú',
    business: 'Startups Center',
    valuation: 22000000000.2,
    active: true,
    cep: '04547-130',
    cnpj: 42267898000290,
  },
  {
    id: 4,
    name: 'Itaú Disabled',
    business: 'Polo Fake',
    valuation: 0.0,
    active: false,
    cep: '08000-800',
    cnpj: 11111111000111,
  },
  {
    id: 5,
    name: 'Itaú CTO',
    business: 'Centro Tecnológico',
    valuation: 22500500500.78,
    active: true,
    cep: '03105-003',
    cnpj: 61590410002410,
  },
  {
    id: 6,
    name: 'CA ITM',
    business: 'Centro Tecnológico',
    valuation: 30000000500.99,
    active: true,
    cep: '05307-190',
    cnpj: 22111222000122,
  },
];
