import { Component, OnInit } from '@angular/core';

import { Salarier } from '../salarier';
import { SalarierService } from '../salarier.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  selectedSalarier: Salarier | undefined;

  salariers: Salarier[] | undefined;

  constructor(private salarierService: SalarierService, public messageService: MessageService) { }

  // ngOnInit(): void {
  // }

  ngOnInit() {
    this.getSalariers();
  }

  onSelect(salarier: Salarier): void {
    this.selectedSalarier = salarier;
    this.messageService.add(`SalariersComponent: Selected salarier id=${salarier.id}`);
  }

  getSalariers(): void {
    this.salarierService.getSalariers()
        .subscribe(salariers => this.salariers = salariers);
  }

}
