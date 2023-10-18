import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BusinessEntity } from 'src/app/domain/entities/business-entity';
import { IBusinessController } from 'src/app/domain/interfaces/controllers/ibusiness-controller';

@Component({
  selector: 'app-polo-list-table',
  templateUrl: './polo-list-table.component.html',
  styleUrls: ['./polo-list-table.component.scss'],
})
export class PoloListTableComponent implements OnInit, OnDestroy {

  @Output('dataSourceEmitter') dataSourceEmitter: EventEmitter<
    MatTableDataSource<BusinessEntity>
  > = new EventEmitter<MatTableDataSource<BusinessEntity>>()

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  subscriptions: Subscription[] = []

  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'active',
    'action',
  ]

  dataSource = new MatTableDataSource<BusinessEntity>([])

  constructor(
    private businessController: IBusinessController, 
    private translate: TranslateService,
  ) {}
 
  ngOnDestroy(): void {
    this.subscriptions.forEach(e => {
      e.unsubscribe()
    })
  }

  ngOnInit(): void { 
    this.subscriptions.push(
        this.businessController.getList().subscribe((businessList: BusinessEntity[]) => {
        this.dataSource = new MatTableDataSource<BusinessEntity>(businessList)
        this.dataSourceEmitter.emit(this.dataSource)
        this.setPaginatorConfig()
        this.translate.onLangChange.subscribe(() => {
          this.setPaginatorConfig()
        })
      })
    )
  }

  setPaginatorConfig() {
    this.paginator._intl.itemsPerPageLabel = this.translate.instant('ITEMS_PER_PAGE')
    this.paginator._intl.nextPageLabel = this.translate.instant('NEXT_PAGE')
    this.paginator._intl.previousPageLabel = this.translate.instant('PREVIOUS_PAGE')
    this.paginator._intl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      const start = page * pageSize + 1
      const end = (page + 1) * pageSize
      return this.translate.instant('ITEMS_RANGE_LABEL', {start, end, length})
    }
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

}
