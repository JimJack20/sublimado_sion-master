import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule }  from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ RouterOutlet, MatCardModule, RouterLink, CommonModule, MatToolbarModule, FormsModule, MatIconModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos = [
    {
      name: 'Corazones',
      price: 20,
      review: 'Muy cómoda y de gran calidad',
      image: 'assets/imgs/celular2.png',
      description: 'Camiseta de algodón 100% con un diseño moderno.',
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.2 // Rating en base a estrellas (ej. 4.2 estrellas)
    },
    {
      name: 'El Callao',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/celular3.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.8
    },
    {
      name: 'Retro',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/laptop1.jpg',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.5
    },
    {
      name: 'Winnie the Pooh',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/laptop2.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.4
    },
    {
      name: 'La Selva',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/laptop3.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.1
    },
    {
      name: '¡YA!',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/monitor1.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.9
    },
    {
      name: 'Más Amor',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/monitor2.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 5.0
    },
    {
      name: 'Personalizar',
      price: 25,
      review: 'Perfecta para el verano caluroso',
      image: 'assets/imgs/tv1.png',
      description: 'Camiseta ligera, ideal para días calurosos.',
      sizes: ['S', 'M', 'L'],
      rating: 4.6
    }
  ];

  selectedProduct: any = null;
  message: string = '';
  selectedSize: string = '';
  

  constructor(private cartService: CartService, private wishlistService: WishlistService) { }

  openProductDetail(product: any): void {
    this.selectedProduct = product;
  }

  closeProductDetail(): void {
    this.selectedProduct = null;
  }

  generateStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating); // Estrellas completas
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Media estrella
    const emptyStars = 5 - fullStars - halfStar; // Estrellas vacías
  
    // Añadir estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
  
    // Añadir media estrella
    if (halfStar) {
      stars.push('half');
    }
  
    // Añadir estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }
  
    return stars;
  }

  addToCart(): void {
    if (this.selectedProduct && this.selectedSize) {
      // Crear un objeto con el producto y la talla seleccionada
      const productWithSize = { ...this.selectedProduct, selectedSize: this.selectedSize };
      
      // Añadir al carrito usando el servicio
      this.cartService.addProducto(productWithSize);
      console.log(`Producto añadido al carrito: ${this.selectedProduct.name}, Talla: ${this.selectedSize}`);

      // Mostrar mensaje de éxito
      this.message = `${this.selectedProduct.name} (${this.selectedSize}) ha sido añadido al carrito`;

      // Opcional: Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.message = '';
      }, 2000);
    } else {
      // Si no se ha seleccionado una talla
      this.message = 'Por favor, selecciona una talla.';
      setTimeout(() => {
        this.message = '';
      }, 2000);
    }
  }

  filtrarProductos(): void {
    const busqueda = (document.getElementById('search-input') as HTMLInputElement).value.toLowerCase();
    const productos = document.querySelectorAll('.product-box');
    productos.forEach((producto: any) => {
      const nombre = producto.querySelector('h3').innerText.toLowerCase();
      if (nombre.includes(busqueda)) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    });
  }

  toggleWishlist(product: any, event: Event): void {
    // Detener la propagación del evento para evitar que el clic en el corazón abra el producto
    event.stopPropagation();
  
    if (this.isInWishlist(product)) {
      console.log(`${product.name} ya está en la lista de deseos.`);
    } else {
      this.wishlistService.addToWishlist(product);
    }
  }

  isInWishlist(product: any): boolean {
    return this.wishlistService.isInWishList(product);
  }
  
}

