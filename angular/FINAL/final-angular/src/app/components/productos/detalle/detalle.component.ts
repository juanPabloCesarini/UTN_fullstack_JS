import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from './../../../services/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  index: number;
  producto: Producto[] = [];
  loading: boolean = false;
 constructor(route: ActivatedRoute,private _productoService: ProductoService) {
   this.index = +route.snapshot.paramMap.get('id')!;

 }
  ngOnInit(): void {
    this.detalleProducto();
  }

  detalleProducto() {
    this.loading= true;
    this._productoService.getProductos().subscribe(data => {
      this.loading = false;
      for (let i = 0; i < data.length; i++){

        if (i +1 == this.index) {
          const prod: Producto = {
            id: data[i].id,
            title: data[i].title,
            category: data[i].category,
            image: data[i].image,
            price: data[i].price,
            description: data[i].description
          };
          this.producto.push(prod);

        }

      }

    });
  }

}
