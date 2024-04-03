import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface IconState {
  isClicked: string;
  isNotClicked: string;
}

class InteractiveChatbox {
  private args: { button: HTMLElement, chatbox: HTMLElement };
  private icons: IconState;
  private state: boolean;

  constructor(a: HTMLElement, b: HTMLElement, c: IconState) {
    this.args = {
      button: a,
      chatbox: b
    };
    this.icons = c;
    this.state = false;
  }

  display(): void {
    const { button, chatbox } = this.args;

    button.addEventListener('click', () => this.toggleState(chatbox));
  }

  private toggleState(chatbox: HTMLElement): void {
    this.state = !this.state;
    this.showOrHideChatBox(chatbox, this.args.button);
  }

  private showOrHideChatBox(chatbox: HTMLElement, button: HTMLElement): void {
    if (this.state) {
      chatbox.classList.add('chatbox--active');
      this.toggleIcon(true, button);
    } else {
      chatbox.classList.remove('chatbox--active');
      this.toggleIcon(false, button);
    }
  }

  private toggleIcon(state: boolean, button: HTMLElement): void {
    const { isClicked, isNotClicked } = this.icons;
    let b = button.children[0].innerHTML;

    if (state) {
      button.children[0].innerHTML = isClicked;
    } else {
      button.children[0].innerHTML = isNotClicked;
    }
  }
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('button') buttonRef!: ElementRef;
  @ViewChild('chatbox') chatboxRef!: ElementRef;

  interactiveChatbox!: InteractiveChatbox;

  ngOnInit(): void {
    const buttonElement = this.buttonRef.nativeElement as HTMLElement;
    const chatboxElement = this.chatboxRef.nativeElement as HTMLElement;

    const icons: IconState = {
      isClicked: 'clicked',
      isNotClicked: 'not clicked'
    };

    this.interactiveChatbox = new InteractiveChatbox(buttonElement, chatboxElement, icons);
    this.interactiveChatbox.display();
  }
}
