import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

  }

  ngOnInit(): void {

    return
  }

  onSubmit() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('email', this.loginForm.value.email);
      sessionStorage.setItem('password', this.loginForm.value.password);

      this.loginForm.reset();
      this.router.navigate(['/dashboard/cat-list']);
    }
  }

}
