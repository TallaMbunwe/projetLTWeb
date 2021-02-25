import { Component, OnInit, Input } from '@angular/core';
import { Salarier } from '../salarier';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SalarierService } from '../salarier.service';


@Component({
  selector: 'app-salarier-details',
  templateUrl: './salarier-details.component.html',
  styleUrls: ['./salarier-details.component.css']
})

export class SalarierDetailsComponent implements OnInit {
  
 @Input() salarier: Salarier | undefined;

  // salarier!: Salarier | undefined;
  id : number =0;
  constructor(  private route: ActivatedRoute,
    private salarierService: SalarierService,
    private location: Location) { }

  ngOnInit(): void {
    this.getSalarier();

  }

  getSalarier(): void {
        // this.route.queryParams.subscribe(params => 
  
    console.log(this.id)
    this.salarierService.getSalarier(this.id)
      .subscribe(salarier => this.salarier = salarier);
  }

  goBack(): void {
    this.location.back();
  }

}
