import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal-products.html',
  styles: [`

    .modal{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content{
      background: white;
      width: 450px;
      padding: 25px;
      border-radius: 15px;
    }

    h2{
      text-align: center;
      color: #e91e63;
      margin-bottom: 20px;
    }

    form{
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    input{
      padding: 12px;
      border-radius: 10px;
      border: 1px solid #ccc;
    }

    .error{
      color: red;
      font-size: 13px;
      margin-top: -8px;
    }

    button{
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: #e91e63;
      color: white;
      cursor: pointer;
    }

    button:disabled{
      background: gray;
      cursor: not-allowed;
    }

    .close{
      float: right;
      font-size: 28px;
      cursor: pointer;
    }

  `]
})
export class ModalProductsComponent {

  @Output() close = new EventEmitter<void>();

  producto = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0
  };

  closeModal(){
    this.close.emit();
  }

  saveProduct(){

    alert('Producto guardado correctamente');

    console.log(this.producto);

    this.closeModal();
  }

}