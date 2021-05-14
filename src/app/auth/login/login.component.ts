import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import{ HttpClient } from '@angular/common/http';

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apitesturl= "http://localhost:4200/login";


  // constructor(private _httpclient: HttpClient) { }
  constructor(public authService: AuthService) { }

  onLogin(form: NgForm){
    if (form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnInit(): void {

    

  }

  isLoading = false;
  
}
