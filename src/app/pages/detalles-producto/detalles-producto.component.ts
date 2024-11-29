import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) { 
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(product: any): void {
    this.wishlistService.removeFromWishlist(product);
    this.wishlist = this.wishlistService.getWishlist(); // Actualiza la lista
  }
}
