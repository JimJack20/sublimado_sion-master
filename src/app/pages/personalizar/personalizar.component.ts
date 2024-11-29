import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personalizar.component.html',
  styleUrl: './personalizar.component.css'
})
export class PersonalizarComponent {
  uploadedImage: string | null = null; // Imagen cargada por el usuario
  selectedColor: string = '#ffffff'; // Color inicial de la prenda
  garmentImage: string = "url('assets/imgs/pruba2.jpg')";
  selectedSize: string = 'M'; // Tamaño predeterminado

  colors: string[] = [
    '#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff', 
    '#ff8800', '#ff00ff', '#00ffff', '#808080', '#8B4513',
    '#FFD700', '#4B0082', '#228B22', '#D2691E', '#FF69B4'
  ];

  sizes: string[] = ['S', 'M', 'L', 'XL'];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.uploadedImage = e.target?.result as string;
        this.garmentImage = this.uploadedImage; // Actualiza el diseño
      };

      reader.readAsDataURL(file);
    }
  }

  // Cambiar el color de la prenda
  changeColor(color: string): void {
    this.selectedColor = color;
    this.updateStyles();
  }

  // Actualizar las variables CSS dinámicas
  updateStyles(): void {
    document.documentElement.style.setProperty('--garment-color', this.selectedColor);
  }

  // Añadir al carrito
  addToCart(): void {
    alert(`Diseño con tamaño ${this.selectedSize} y color ${this.selectedColor} añadido al carrito.`);
  }
}
