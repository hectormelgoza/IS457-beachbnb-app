import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Place } from '../tab1/place.model';
import { PlaceService } from '../tab1/place.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  offers: Place[];

  constructor(private placeService: PlaceService,
    private actionSheetController: ActionSheetController,
    private router: Router) {}

  ionViewWillEnter(){
    this.offers = this.placeService.places;
    console.log(this.offers);
  }
  async onClickOffer(id: string){
    const actionSheet = await this.actionSheetController.create({
      header: 'You would like to:',
      buttons: [
        {
          text: 'Remove Offer',
          icon: 'trash',
          handler: () => {
            this.placeService.removeOffer(id);
            this.offers = this.placeService.places;
          }
        },
        {
          text: 'View Detail',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/tabs/tab2/offerdetail/'+id]);
          }
        },
        {
          text: 'Edit Offer',
          icon: 'pencil',
          handler: () => {
            this.router.navigate(['/tabs/tab2/editoffer/'+id]);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

}
