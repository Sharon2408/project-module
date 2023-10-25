import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/getProduct.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private productService: ProductService) {}

  intercept( request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    this.productService.isLoading.next(true);
    const authToken = 'token';
    if (authToken) {
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authReq).pipe(finalize(
        ()=>{
          this.productService.isLoading.next(false)
        }
      ));
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 404) {
          this.router.navigate(['/error']);
          console.log(error.message);
        }
        return throwError('Error Occurred' + error.message);
      })
    );
  }
}
