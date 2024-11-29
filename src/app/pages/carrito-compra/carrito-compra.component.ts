import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartService } from '../../services/cart.service';''


@Component({
  selector: 'app-carrito-compra',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './carrito-compra.component.html',
  styleUrl: './carrito-compra.component.css'
})
export class CarritoCompraComponent {
  productosEnCarrito: any[] = [];
  totalPrecio: number = 0;  // Para calcular el precio total
  totalProductos: number = 0; // Para contar el total de productos
  mensaje: string = '';

  constructor(private cartService: CartService, private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
    this.productosEnCarrito = this.cartService.getCarrito(); // Obtener productos del carrito
    this.calcularTotales(); // Calcula los totales al cargar el carrito
  }

  eliminarDelCarrito(producto: any): void {
    this.cartService.removeProducto(producto); // Eliminar producto
    this.productosEnCarrito = this.cartService.getCarrito(); // Actualizar lista
    this.calcularTotales(); // Recalcular totales después de eliminar un producto
  }

  calcularTotales(): void {
    this.totalPrecio = 0;
    this.totalProductos = 0;
    for (let producto of this.productosEnCarrito) {
      this.totalPrecio += producto.price; // Sumar el precio de cada producto
      this.totalProductos++; // Contar la cantidad de productos
    }
  }

  hacerPedido(): void {
    if (this.productosEnCarrito.length > 0) {
      // Usa el CurrencyPipe para mostrar el total en formato de moneda
      this.mensaje = `¡Gracias por tu compra! El total a pagar es ${this.currencyPipe.transform(this.totalPrecio, 'USD')}.`;
      // Aquí podrías implementar lógica para procesar el pedido (como ir a una página de pago)
      // Limpiar carrito y totales si es necesario
      this.cartService.clearCarrito();
      this.productosEnCarrito = [];
      this.totalPrecio = 0;
      this.totalProductos = 0;
    } else {
      this.mensaje = 'Tu carrito está vacío. Añade productos para hacer un pedido.';
    }
  }
}
