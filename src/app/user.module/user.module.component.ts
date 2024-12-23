import { Component } from '@angular/core';

@Component({
  selector: 'app-user.module',
  imports: [],
  templateUrl: './user.module.component.html',
  styleUrl: './user.module.component.scss'
})
export class UserModuleComponent {

}

export interface User {
  id: number;
    username: string;
    password: string; 
    role: UserRole;
    isActive: null; 
     
}

export enum UserRole {
  SimpleUser = 'Простой пользователь',
  AdvancedUser = 'Продвинутый пользователь',
  Admin = 'Администратор'
}