import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-products',
  standalone: true,
  imports: [CommonModule],
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
      z-index: 1000;
    }

    .modal-content{
      background: white;
      width: 500px;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      animation: aparecer 0.3s ease;
      position: relative;
    }

    @keyframes aparecer{
      from{
        transform: scale(0.7);
        opacity: 0;
      }
      to{
        transform: scale(1);
        opacity: 1;
      }
    }

    h2{
      text-align: center;
      color: #e91e63;
      margin-bottom: 20px;
    }

    .close{
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 28px;
      cursor: pointer;
      color: gray;
    }

    .close:hover{
      color: #e91e63;
    }

    form{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    input{
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 15px;
    }

    button{
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: #e91e63;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover{
      background: #c2185b;
    }

  `]
})
export class ModalProductsComponent {

  @Output() close = new EventEmitter<void>();

  closeModal(){
    this.close.emit();
  }

  saveProduct(){
    alert('Producto agregado correctamente');
    this.closeModal();
  }

}