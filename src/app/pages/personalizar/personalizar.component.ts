import { Component } from '@angular/core';

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [],
  templateUrl: './personalizar.component.html',
  styleUrl: './personalizar.component.css'
})
export class PersonalizarComponent {
  imageUrl: string | ArrayBuffer | null = null;

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
