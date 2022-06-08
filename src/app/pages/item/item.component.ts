import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescription } from 'src/app/interfaces/producto.description.interface';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescription;
  id:string;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id'])

      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescription) =>{ 
        this.id= parametros['id'];
        this.producto = producto;
      });
    })
  }

}
