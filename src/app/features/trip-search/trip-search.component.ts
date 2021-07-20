import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { Trip } from 'src/app/shared/model/trip';
import { TripServiceService } from 'src/app/shared/services/trip-service.service';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {

  @Output() newEvent = new EventEmitter<string>();

  filteredTrips$!: Observable<Trip[]>
  private searchTerms = new Subject<string>();

  constructor(private tripService: TripServiceService) { }

  ngOnInit(): void {
    this.filteredTrips$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tripService.searchTrips(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.newEvent.next(term);
  }
}
