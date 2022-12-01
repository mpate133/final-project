import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private commonService : CommonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.commonService.getToken();
    request = request.clone({
        setHeaders: {
            Authorization: "Bearer " + authToken
        }
    });
    return next.handle(request);
  }
}
