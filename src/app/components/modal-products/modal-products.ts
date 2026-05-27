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
      inset: 0;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(6px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .modal-content{
      background: linear-gradient(145deg, #ffffff, #fff0f5);
      width: 500px;
      padding: 30px;
      border-radius: 25px;
      box-shadow:
        0 10px 30px rgba(0,0,0,0.2),
        0 0 15px rgba(233,30,99,0.2);
      position: relative;
      overflow: hidden;
      animation: popUp 0.35s ease;
      border: 2px solid rgba(255,255,255,0.6);
    }

    .modal-content::before{
      content: '';
      position: absolute;
      top: -60px;
      right: -60px;
      width: 180px;
      height: 180px;
      background: rgba(233,30,99,0.1);
      border-radius: 50%;
    }

    .modal-content::after{
      content: '';
      position: absolute;
      bottom: -70px;
      left: -70px;
      width: 200px;
      height: 200px;
      background: rgba(255,182,193,0.15);
      border-radius: 50%;
    }

    @keyframes fadeIn{
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }

    @keyframes popUp{
      from{
        transform: scale(0.7) translateY(30px);
        opacity: 0;
      }
      to{
        transform: scale(1) translateY(0);
        opacity: 1;
      }
    }

    h2{
      text-align: center;
      color: #e91e63;
      margin-bottom: 25px;
      font-size: 30px;
      font-weight: bold;
      position: relative;
      z-index: 1;
    }

    .close{
      position: absolute;
      right: 18px;
      top: 14px;
      font-size: 30px;
      cursor: pointer;
      color: #999;
      transition: 0.3s ease;
      z-index: 2;
    }

    .close:hover{
      color: #e91e63;
      transform: rotate(90deg) scale(1.1);
    }

    form{
      display: flex;
      flex-direction: column;
      gap: 18px;
      position: relative;
      z-index: 1;
    }

    input{
      padding: 14px 16px;
      border: 2px solid transparent;
      border-radius: 14px;
      font-size: 15px;
      background: rgba(255,255,255,0.9);
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: 0.3s ease;
      outline: none;
    }

    input:focus{
      border-color: #e91e63;
      transform: scale(1.02);
      box-shadow: 0 0 12px rgba(233,30,99,0.25);
    }

    button{
      padding: 14px;
      border: none;
      border-radius: 14px;
      background: linear-gradient(135deg, #ff4f8b, #e91e63);
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s ease;
      box-shadow: 0 6px 15px rgba(233,30,99,0.3);
    }

    button:hover{
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 20px rgba(233,30,99,0.4);
    }

    button:active{
      transform: scale(0.98);
    }

  `]
})
export class ModalProductsComponent {

  @Output() close = new EventEmitter<void>();

  closeModal(){
    this.close.emit();
  }

  saveProduct(){
    alert('✨ Producto agregado correctamente');
    this.closeModal();
  }

}