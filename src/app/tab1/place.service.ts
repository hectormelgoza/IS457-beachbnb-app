import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York city',
      '../assets/imgs/nyc.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      '../assets/imgs/paris.jpg',
      189.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    )
  ];
  get places(){
    return [...this._places]
  }
  getPlace(id: string){
    return{...this._places.find(p => p.id === id)}
  }
  addPlace(
    title: string, 
    description: string, 
    price: number, 
    dateFrom: Date, 
    dateTo: Date){
      const newPlace = new Place(
        Math.random().toString(),
        title,
        description,
        '../assets/imgs/nyc.jpg',
        price,
        dateFrom,
        dateTo
      );
      this._places.push(newPlace);
      console.log(this._places);
    }
    updateOffer(
      placeId: string,
      title: string,
      description: string,
      price: number,
      dateFrom: Date,
      dateTo: Date) {
        const updatedPlaceIndex = this._places.findIndex(p1 => p1.id === placeId);
        const oldPlace = this._places[updatedPlaceIndex];
        this._places[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.image,
          price,
          dateFrom,
          dateTo
        )
      }
      removeOffer(id: string){
        const position = this._places.findIndex(p => p.id === id);
        this._places.splice(position,1);
        console.log('removed');
      }
  constructor() { }
}
