import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { user_details } from 'src/models/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  user_details_url = environment.user_details;

  register(form: user_details) {
    return this.http.post(this.user_details_url, form).subscribe({
      next: (res) => {
        console.log('success');
      },
      error: (error) => {
        console.log('error');
      },
    });
  }
}
