import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/services.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  products : IProduct[] = [];
constructor (private ProductService : ProductService){
  this.ProductService.getProducts().subscribe(data => {
    this.products=data
  } , error => {
    console.log(error.message);
  })
}
setValue (e :any){

}

}
