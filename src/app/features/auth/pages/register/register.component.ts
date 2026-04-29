import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  
  onRegister() {
    if (this.password() !== this.confirmPassword()) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    
    console.log('Register attempt:', {
      email: this.email(),
      password: this.password()
    });
    // Aquí irá la lógica de registro en sprints posteriores
  }
}
