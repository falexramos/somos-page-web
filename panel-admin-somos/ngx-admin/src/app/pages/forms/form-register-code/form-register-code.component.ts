import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-register-code',
  templateUrl: './form-register-code.component.html',
  styleUrls: ['./form-register-code.component.scss']
})
export class FormRegisterCodeComponent {

  options = [
    { value: 'This is value 1', label: 'Predicas' },
    { value: 'This is value 2', label: 'Podcast' },
  ];
  option;
}
