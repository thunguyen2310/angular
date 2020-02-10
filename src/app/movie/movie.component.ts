import { Component, OnInit, ElementRef } from '@angular/core';
// import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  numberForm: FormGroup;
  data = [];
  prevName = '';
  constructor(
    public messageService: MessageService,
    private elemntRef: ElementRef
  ) { }

  ngOnInit() {
    this.data = this.messageService.getMessages();
    this.numberForm = new FormGroup({
      numberInput: new FormControl('', [
        Validators.required,
        this.forbiddenNameValidator(/^[0-9]{0,9}(\.[0-9]{1,2})?$/)
      ])
    });
  }

  getMess() {
    return this.messageService.getMessages();
  }
  onSubmit() {
    console.log(this.numberForm.get('numberInput'));
    const num = this.numberForm.value.numberInput;
    if (this.prevName) {
      this.messageService.updateMess(this.prevName, num);
      this.prevName = '';
      this.numberForm.get('numberInput').reset();
    } else {
      this.messageService.addMess(num);
      this.data = this.getMess();
      // console.log(this.data);
      this.numberForm.get('numberInput').reset();
    }
  }
  deleteMess(numberInput) {
    this.messageService.deleteMess(numberInput);
  }

  btnUpdate(numberInput) {
    this.prevName = numberInput;
    this.numberForm.get('numberInput').setValue(numberInput);
    const btn = this.elemntRef.nativeElement.querySelector('#numberInput');
    btn.focus();
  }

  // updateMess(item) {
  //   this.messageService.updateMess(item, e);
  // }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      // tslint:disable-next-line:object-literal-key-quotes
      return forbidden ? null : { 'forbiddenName': { value: control.value } };
    };
  }
}
