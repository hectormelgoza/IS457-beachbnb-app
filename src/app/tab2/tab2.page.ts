import { Component } from '@angular/core';
import { Place } from '../tab1/place.model';
import { PlaceService } from '../tab1/place.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  offers: Place[];

  constructor(private placeService: PlaceService) {}

  ionViewWillEnter(){
    this.offers = this.placeService.places;
    console.log(this.offers);
  }

}
