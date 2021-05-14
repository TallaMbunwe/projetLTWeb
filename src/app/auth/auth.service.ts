import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject} from "rxjs"

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService{
    private token!: string;

    /*listener permetant de savoir si on est connecté en temps qu'utilisateur.
    Nous l'inserons plus bas dans la methode login pour l'actioner */
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient) {

    }

    getToken() {
        return this.token;
    }

    getauthStatusListener(){
        return this.authStatusListener.asObservable();
    }

    createSalarier(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post("http://localhost:3000/api/auth/register", authData)
            .subscribe(response => {
                console.log(response);
            })

    }

    login(email: string, password: string){
        const authData: AuthData = {email: email, password: password};
        this.http.post<{token: string}>("http://localhost:3000/api/auth/login", authData)
        .subscribe(response => {
            const token = response.token;
            this.token = token;
            this.authStatusListener.next(true);
        })
    }

}