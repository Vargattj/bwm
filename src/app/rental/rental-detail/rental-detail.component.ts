import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss'],
})
export class RentalDetailComponent implements OnInit {
  // Dependency injection
  constructor(private route: ActivatedRoute) {}

  public rentalId = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rentalId = params['rentalId'];
    });
  }
}
