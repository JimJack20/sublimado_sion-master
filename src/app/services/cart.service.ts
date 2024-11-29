import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];

  constructor() { }

  // Añadir producto al carrito
  addProducto(producto: any): void {
    this.carrito.push(producto);
  }

  // Obtener productos del carrito
  getCarrito(): any[] {
    return this.carrito;
  }

  // Eliminar producto del carrito (opcional)
  removeProducto(producto: any): void {
    const index = this.carrito.findIndex(item => item.name === producto.name);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  getCarritoCount(): number {
    return this.carrito.length;
  }

  clearCarrito(): void {
    this.carrito = [];  // Vaciar el carrito
  }
}
