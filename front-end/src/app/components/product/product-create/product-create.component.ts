import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product =  {
    name: "",
    price: ""
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.get().subscribe((res) =>{
      console.log("resposta", res)
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Operação Executada com Sucesso!')
    })
  }

}
