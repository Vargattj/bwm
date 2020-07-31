import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RentalService } from './shared/rental.service';
import { RentalComponent } from './rental.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      { path: '', component: RentalListingComponent },
      { path: ':rentalId', component: RentalDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    RentalListingComponent,
    RentalDetailComponent,
    RentalComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [
    RentalService
  ]
})
export class RentalModule {}
