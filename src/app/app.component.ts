import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tarea2IDWM';

  form = {
    email: '',
    message: '',
  };

  isSubmitting = false;
  showPopup = false;

  onSubmit() {
    if (!this.form.email || !this.form.message) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.showPopup = true;
      this.resetForm();
    }, 2000);
  }

  closePopup() {
    this.showPopup = false;
  }

  resetForm() {
    this.form.email = '';
    this.form.message = '';
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
