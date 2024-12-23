import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './enter.component.html',
})
export class EnterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Предполагается, что ответ содержит токен или информацию о пользователе
        console.log('Login successful', response);
        
        // Здесь вы можете сохранить токен, если он есть
        localStorage.setItem('token', response.token);

        // Перенаправление на новую страницу
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login failed', error);
        // Обработка ошибок, например, уведомление пользователя
      }
    );
  }
}