import { Component, OnInit } from '@angular/core';
import { ChatService } from '../Services/chat-service.service';
import { AuthService } from '../Services/auth.service';
import { ChatMessage } from '../Model/Chat'; // Import ChatMessage model

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  newMessage: string = '';

  constructor(private chatService: ChatService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      console.error('User is not authenticated. Unable to send message.');
      return;
    }

    // Assuming sender information is managed by the backend
    const sender: string = this.authService.getCurrentUser(); // Get current user

    // Create the chat message object
    const message: ChatMessage = {
      sender: sender,
      content: this.newMessage,
      timestamp: new Date()
    };

    // Send the message
    this.chatService.sendMessage(message).subscribe(
      () => {
        // Message sent successfully
        console.log('Message sent successfully');
        // Optionally, refresh chat history after sending a message
        // this.getChatHistory();
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }
}
