import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserRole } from './user.module/user.module.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5000/api'; // Замените на URL вашего API
    private loggedInUser: User | null = null;

    constructor(private http: HttpClient) {}

    register(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, { username, password });
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { username, password });
    }

    activateUser(token: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/activate`, { token });
    }

    resetPassword(username: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/reset-password`, { username });
    }

    // Обработка успешного входа в систему
    handleLogin(response: any): void {
        this.loggedInUser = response.user; // Предполагается, что ответ содержит объект пользователя
        localStorage.setItem('token', response.token); // Сохранение токена в localStorage для дальнейшего использования
    }

    logout(): void {
        this.loggedInUser = null;
        localStorage.removeItem('token'); // Удаление токена при выходе
    }

    getCurrentUser(): User | null {
        return this.loggedInUser;
    }

    isAuthorized(requiredRole: UserRole): boolean {
        return this.loggedInUser ? this.loggedInUser.role === requiredRole : false;
    }
}