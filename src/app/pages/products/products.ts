import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalProductsComponent } from '../../components/modal-products/modal-products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ModalProductsComponent
  ],
  templateUrl: './products.html',
  styles: [`

    .container{
      width: 90%;
      margin: 40px auto;
      font-family: Arial, sans-serif;
    }

    h1{
      text-align: center;
      color: #e91e63;
      margin-bottom: 20px;
    }

    .btn-add{
      padding: 12px 20px;
      border: none;
      background: #e91e63;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 20px;
      font-size: 16px;
    }

    .btn-add:hover{
      background: #c2185b;
    }

    table{
      width: 100%;
      border-collapse: collapse;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    th{
      background: #e91e63;
      color: white;
      padding: 12px;
    }

    td{
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
    }

    tr:nth-child(even){
      background: #ffe4ec;
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  showModal = false;

}