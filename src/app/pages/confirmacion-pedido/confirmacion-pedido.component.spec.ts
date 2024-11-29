import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionPedidoComponent } from './confirmacion-pedido.component';

describe('ConfirmacionPedidoComponent', () => {
  let component: ConfirmacionPedidoComponent;
  let fixture: ComponentFixture<ConfirmacionPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
