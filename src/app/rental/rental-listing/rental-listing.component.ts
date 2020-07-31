import { Component, OnInit } from '@angular/core';
import { RentalService } from './../shared/rental.service';
import { Rental } from './../shared/rental.model';
import { IRental, AppStorage } from './../shared/rental.interface';

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.scss'],
})
export class RentalListingComponent implements OnInit, IRental {
  rentals: Rental[] = [];
  someData = 'Some Data1';
  isLoaded = false;

  constructor(private rentalService: RentalService) {}
  ngOnInit() {
    const appStorage = new AppStorage<number>();
    appStorage.addItem(23);

    const item = appStorage.getItem(0);
    const items = appStorage.displayItems();

    this.rentalService.getRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }

  implementMe() {
    return 'AA';
  }
}
