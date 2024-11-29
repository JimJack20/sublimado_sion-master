import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() { }

  addToWishlist(product: any): void {
    if (!this.isInWishList(product)) {
      this.wishlist.push(product);
      console.log(`${product.name} ha sido añadido a la lista de deseos.`);
      console.log('Lista de deseos actualizada:', this.wishlist);  // Verifica el contenido de la lista
    }
  }

  isInWishList(product: any): boolean {
    return this.wishlist.some(item => item.name === product.name);
  }

  getWishlist(): any[] {
    return this.wishlist;
  }

  removeFromWishlist(product: any): void {
    this.wishlist = this.wishlist.filter(item => item.name !== product.name);
    console.log(`${product.name} ha sido eliminado de la lista de deseos.`);
  }
  
}
