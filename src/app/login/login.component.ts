import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.credentials).subscribe((response: any) => {
      // Handle successful login response
      console.log('worked');
      localStorage.setItem('token', response.token);
      
      // Check the role of the authenticated user
      console.log(response.role)
      if (response.role === 'ADMIN') {

        // Redirect to the admin dashboard
        this.router.navigate(['/dash']);
      } else {
        // Redirect to the default user dashboard or any other route
        this.router.navigate(['/parent']);
      }
    }, error => {
      // Handle login error
      console.error('Login failed:', error);
    });
  }
}
