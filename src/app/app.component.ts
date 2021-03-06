import { Component } from '@angular/core';
import { InfoPaginaService } from './service/info-pagina.service';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public infoPaginaService: InfoPaginaService,
              public productosService: ProductosService) {}
}
