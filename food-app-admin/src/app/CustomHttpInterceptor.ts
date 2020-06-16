import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Inside Intercept");
        const hardCodedToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTExMDA5NjUsImlhdCI6MTU5MTA2NDk2NX0.tGUDdrjmCYffsGcgN5PlrHpUtobQ6PskLajMa9DeO4g";
        const reqWithAuth = req.clone({
            setHeaders: {
                Authorization: `Bearer ${hardCodedToken}`
            }
        });

        return next.handle(reqWithAuth);
    }

}