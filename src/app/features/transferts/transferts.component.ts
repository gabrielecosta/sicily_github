import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Transfert } from 'src/app/shared/model/transfert';
import { TransfertService } from './../../shared/services/transfert.service';

@Component({
  selector: 'app-transferts',
  templateUrl: './transferts.component.html',
  styleUrls: ['./transferts.component.css']
})
export class TransfertsComponent implements OnInit {

  trasf$! : Observable<Transfert[]>;
  filteredTrasf$! : Observable<Transfert[]>;
  dataSource: Transfert[] = [];

  constructor(private trasfService: TransfertService) { }

  ngOnInit(): void {
    this.trasfService.getTransferts()
      .subscribe(array => this.dataSource = array);
  }


  sortingTrasferts(term: string): void {
    this.trasfService.searchTransferts(term)
      .subscribe(array => this.dataSource = array);
  }

  displayedColumns: string[] = ['id', 'dest', 'price' ];
}
