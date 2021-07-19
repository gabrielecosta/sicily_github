import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Trip } from 'src/app/shared/model/trip';
import { TripServiceService } from './../../shared/services/trip-service.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  //trips: Trip[] = [];

  trips$!: Observable<Trip[]>;
  filteredTrips$!: Observable<Trip[]>

  constructor(private tripService: TripServiceService) { }

  ngOnInit(): void {
    //this.getTrips();
    this.trips$ = this.tripService.getTrips();
    this.filteredTrips$ = this.trips$;
  }

 /*
  getTrips(): void {
    this.tripService.getTrips().subscribe(trips => this.trips = trips);
  }
  */

  sortingTrips(term: string): void {
    this.filteredTrips$ = this.tripService.searchTrips(term);
  }

}
