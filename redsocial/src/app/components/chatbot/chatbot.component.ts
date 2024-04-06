import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  isFullSize: boolean = true;
window: any;



  

  showPopup: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Detecta cambios en la dimensión de la ventana y actualiza el estado de la ventana emergente según corresponda
    this.showPopup = window.innerWidth >= 1000;
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}
