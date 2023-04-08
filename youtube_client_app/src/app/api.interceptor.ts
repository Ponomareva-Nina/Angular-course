import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/constants/api-constants';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cloned = req.clone({
      params: req.params.set('key', API_KEY),
    });
    return next.handle(cloned);
  }
}