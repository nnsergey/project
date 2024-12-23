import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isModalVisible: boolean = false;

  constructor() {}

  // Метод для обработки входа
  onLogin(): void {
    // Здесь вы можете добавить логику для обработки входа, например, отправить данные на сервер
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  // Метод для обработки регистрации
  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    // Здесь вы можете добавить логику для обработки регистрации, например, отправить данные на сервер
    console.log('Registering with Email:', this.email);
    console.log('Password:', this.password);
  }

  // Метод для переключения модального окна
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}