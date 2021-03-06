import "rxjs/add/operator/first";
import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

import { AuthService } from "../providers/auth/auth.service";

@Injectable()
export class LoginAuthGuard implements CanLoad {

    constructor(public authService: AuthService, private router: Router) {}

    canLoad(): Observable<boolean> {
        return this.authService.loginObservable().map(auth => {
            if (auth) {
                this.router.navigate(["/main"]);
                return false;
            }
            return true;
        }).first();
    }
}
