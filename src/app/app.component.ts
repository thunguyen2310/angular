import { Component, OnInit, ElementRef } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private elemntRef: ElementRef
  ) { }
  private title = 'aaa';
  data = [];
  name = '';
  prevName = '';
  getMess() {
    return this.messageService.getMessages();
  }
  addMess(item) {
    if (this.prevName) {
      this.messageService.updateMess(this.prevName, this.name);
      this.prevName = '';
      this.name = '';
    } else {
      this.messageService.addMess(item);
      this.data = this.messageService.getMessages();
      console.log(this.data);
      this.name = '';
    }
  }
  deleteMess(item) {
    this.messageService.deleteMess(item);
  }

  btnUpdate(item) {
    this.prevName = item;
    this.name = item;
    const btn = this.elemntRef.nativeElement.querySelector('#textname');
    btn.focus();
  }

  // updateMess(item) {
  //   this.messageService.updateMess(item, e);
  // }
  ngOnInit() {
    this.data = this.getMess();
  }
}
