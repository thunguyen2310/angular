import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public messageService: MessageService) { }
  title = 'bt';
  data = [];
  name = '';
  getMess() {
    return this.messageService.getMessages();
  }
  addMess(item) {
    this.messageService.addMess(item);
    this.data = this.messageService.getMessages();
    console.log(this.data);
    this.name = '';
  }
  ngOnInit() {
    this.data = this.getMess();
  }
}
