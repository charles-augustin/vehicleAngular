
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import * as io from 'socket.io-client';
import { baseURL } from 'src/app/shared/baseurl';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    providers: [DatePipe]
})

export class ChatComponent implements OnInit {

    chats: string[];
    username;
    socket;
    constructor(private chatService: ChatService, private authService: AuthService) {
        this.socket = io(baseURL);
    }

    ngOnInit(){
        this.authService.getUserName().subscribe(res => this.username = res);
        this.getChats();
        this.socket.on('chatAdded', () => {
            this.getChats();
        });
    }

    sendMessage(event: any) {
        this.chatService.addMessage(this.username, event.message);
    }

    getChats() {
        this.chatService.getChats().subscribe(res => {
            this.chats = res;
        });
    }
}
