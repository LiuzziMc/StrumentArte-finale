import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recupero-password',
  templateUrl: './recupero-password.component.html',
  styleUrls: ['./recupero-password.component.scss']
})
export class RecuperoPasswordComponent implements OnInit  {
  token: string = ''; // Assign an initial value

  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this['token'] = params['token']; // Access token using square brackets
    });
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Implement error handling for mismatched passwords
      return;
    }

    this.http.post('/bi/reset-password', { token: this['token'], newPassword: this.newPassword }).subscribe(
      () => {
        // Implement success handling for password reset
      },
      (error) => {
        // Implement error handling for password reset
      }
    );
  }

}
