import { Component, OnInit } from '@angular/core';
import { Salarier} from '../salarier';
import { SalarierService } from '../salarier.service';


@Component({
  selector: 'app-salarier',
  templateUrl: './salarier.component.html',
  styleUrls: ['./salarier.component.css']
})
export class SalarierComponent implements OnInit {

  salariers!: Salarier[];

  getSalariers(): void {

    this.salarierService.getSalariers()
      .subscribe(salariers => this.salariers = salariers);

  }


  selectedSalarier?: Salarier;

    
  constructor(private salarierService: SalarierService) { }

  // ngOnInit(): void {
  // }

  // onSelect(salarier: Salarier): void {
  //   this.selectedSalarier = salarier;
  // }

  ngOnInit() {
    this.getSalariers();
  }

}
