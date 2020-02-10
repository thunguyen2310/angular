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
    const index = this.messages.indexOf(item);
    this.messages.splice(index, 1);
  }
  updateMess(item1, item2) {
    const index = this.messages.indexOf(item1);
    this.messages[index] = item2;
  }
}
