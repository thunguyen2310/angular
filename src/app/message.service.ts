import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: any[] = [];

  constructor() { }
  getMessages() {
    return this.messages;
  }
  addMess(item) {
    this.messages.push(item);
  }
  deleteMess(item) {
    this.messages.(item);
  }
}
