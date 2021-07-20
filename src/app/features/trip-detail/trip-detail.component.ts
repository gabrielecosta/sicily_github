import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Location } from '@angular/common';
import { Trip } from 'src/app/shared/model/trip';
import { TripServiceService } from './../../shared/services/trip-service.service';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

@Input() trip?: Trip;

imgCollection: string[] = [];
index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tripService: TripServiceService
  ) { }

  ngOnInit(): void {
    this.getTrip();
  }

  getTrip(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tripService.getTrip(id)
      .subscribe((trip) => {
        this.trip = trip;
        this.imgCollection = trip.photoUrl
      });
  }

  goBack(): void {
    this.location.back();
  }

  increment(): void {
    if (this.index < this.imgCollection.length - 1) {
    this.index++;
    } else {
      console.log("max index");
    }
  }

  decrement(): void {
    if (this.index > 0) {
      this.index--;
      } else {
        console.log("min index");
      }
  }
}
