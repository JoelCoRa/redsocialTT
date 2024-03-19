import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  isFullSize: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 1000) {
      this.isFullSize = false;
    } else {
      this.isFullSize = true;
    }
  }

}
