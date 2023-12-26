import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { BasePageRoutingModule } from 'src/app/layout/base/base-routing.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    IonicModule,
    BasePageRoutingModule
  ],
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  isModalOpen: boolean = false;

  userEmail: string = '';

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    let email = sessionStorage.getItem('email');
    this.userEmail = email ? email : 'default@gmail.com';
  }

  onLogout(): void {
    this.setOpen(false);
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  setOpen(state: boolean) {
    this.isModalOpen = state;
    if(!state) {
      this.closeModal();
    }
  }

  async closeModal() {
    const modal = await this.modalController.getTop();
    if(modal) {
      modal.dismiss();
    }
  }
}
