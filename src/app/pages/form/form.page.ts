import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  exampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.exampleForm = this.formBuilder.group({
      normal: new FormControl('', Validators.required),
      textarea: new FormControl(''),
      calendar: new FormControl(''),
      dropdown: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    return
  }

  onSubmit() {
    if (this.exampleForm.valid) {
      this.exampleForm.reset();
    }
  }

}
