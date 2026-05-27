import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalProductsComponent } from '../modal-products/modal-products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ModalProductsComponent
  ],
  templateUrl: './home.html',
})
export class Home {

  showModal = false;

}