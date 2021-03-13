import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

import{ AuthService } from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoading = false;

  onSignup(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authService.createSalarier(form.value.email, form.value.password);
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   Roles: any = ['Admin', 'Author', 'Reader'];

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
