import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  user = JSON.parse(sessionStorage.getItem('user')) || [];
  counter: number;
  ctr: number;
  private tutorialHidden = true;

  constructor(private popover: PopoverController) { }


  ngOnInit() {
  }

  async createProfilePopover(eve)
  {
    const popover = await this.popover.create({component:ProfileComponent, event:eve,mode:'ios',cssClass:'profile'});
    return await popover.present();
  }
}

