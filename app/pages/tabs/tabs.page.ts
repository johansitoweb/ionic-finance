import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', {static: false}) tabs!: IonTabs;
  selectedTab: any;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
  
}