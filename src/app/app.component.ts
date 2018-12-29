import { Component } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  newValuew: any;
  ngOnInit () {
    this.form = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl(''),
    });
  }
  decimalChanged = function (oldValue, newValue) {
    if(newValue != '') {
      this.form.patchValue({binary: parseInt(newValue, 10).toString(2)});
      this.form.patchValue({octal: parseInt(newValue, 10).toString(8)});
      this.form.patchValue({hexa: parseInt(newValue, 10).toString(16)});

    }

      else {this.form.patchValue({binary: ""});
      this.form.patchValue({octal: ""});
      this.form.patchValue({hexa: ""});}

  };

}
