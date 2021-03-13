// import { Component, OnInit } from '@angular/core';
// import { Salarier } from '../salarier';
// import { SalarierService } from '../salarier.service';


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   salariers: Salarier[] = [];

//   constructor(private salarierService: SalarierService) { }

//   ngOnInit(): void {
//   }

//   getSalariers(): void {
//     this.salarierService.getSalariers()
//       .subscribe(salariers => this.salariers = salariers.slice(1, 5));
//   }

// }


import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}