import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  
  onLogin() {
    console.log('Login attempt:', {
      email: this.email(),
      password: this.password()
    });
    // Aquí irá la lógica de autenticación en sprints posteriores
  }
}
