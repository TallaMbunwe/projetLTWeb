import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubs!: Subscription;
  userIsAuthenticated= false;
  
// nous ajoutons la valeur du service d'authentification à l'entête car il peut changer
  constructor(private authService: AuthService) { }
  
  ngOnInit() { 
    this.authListenerSubs = this.authService
    .getauthStatusListener().subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;

    });
  }
  
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();

  }
}


