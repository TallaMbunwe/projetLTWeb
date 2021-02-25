import { Injectable } from '@angular/core';
import { Salarier } from './salarier';
import { SALARIERS } from './mock-salarier';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SalarierService {

  constructor( private messageService: MessageService ) { }

  // getSalariers(): Salarier[] {
  //   return SALARIERS;
  // }

  getSalariers(): Observable<Salarier[]> {
    const salariers = of(SALARIERS);
    this.messageService.add('SalarierService: fetched heroes');
    return salariers;
  }

  getSalarier(id: number): Observable<Salarier | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`SalarierService: fetched salarier id=${id}`);
    return of(SALARIERS.find(salarier => salarier.id === id));
  }

}

