import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoged = false;
  isLoginFail = false;
  LoginUser = new LoginUser();
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.LoginUser = new LoginUser(this.username, this.password);

    this.authService.login(this.LoginUser)
      .subscribe(data => {
        this.isLoged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authAutorities);
        this.roles = data.authAutorities;
        this.router.navigate(['']);
      }, err => {
        this.isLoged = false;
        this.isLoginFail = true;
        this.errorMessage = err.err.message;
        console.log(this.errorMessage);
      });
  }

  onLogout(): void {
    this.tokenService.logout()
    window.location.reload()
  }


}
