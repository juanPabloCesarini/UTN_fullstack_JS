import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../models/Producto';
import { Router} from '@angular/router';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listaProductos: Producto[] = [];
  index: number = 0;
  loading: boolean = false;
  constructor(
    private _productoService: ProductoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listado();
  }

  listado() {
    this.loading = true;
    this._productoService.getProductos().subscribe(data => {
      this.loading = false;
      for (let i = 0; i < data.length; i++){
        const prod:Producto = {
          id : data[i].id,
          title : data[i].title,
          category : data[i].category,
          image : data[i].image,
          price : data[i].price,
          description : data[i].description
        };
        this.listaProductos.push(prod);
      }

    });
  }
  detalle(index: number) {
    this.router.navigate(['/detalle', index]);

  }
}
