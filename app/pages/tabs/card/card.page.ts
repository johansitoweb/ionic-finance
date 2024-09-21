import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardPage implements OnInit {

  swiperModules = [IonicSlides];
  cards: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cards = [
      { id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '5786 8945 9098 1100', card_holder: 'Nikhil Ag.', exp_date: '08/24' },
      { id: 2, company_img: 'assets/imgs/visa.png', card_no: '2006 7091 2014 8766', card_holder: 'Nikhil Ag.', exp_date: '11/29' },
      { id: 3, company_img: 'assets/imgs/mastercard.png', card_no: '4016 3081 2056 7890', card_holder: 'Nikhil Ag.', exp_date: '06/25' }
    ];
  }

}