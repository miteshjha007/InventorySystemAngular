import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  Pname: any;
  constructor(private product: AppComponent, private route: ActivatedRoute,private api :ApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log(params.get('id'))
    this.api.getProduct().subscribe({
      next:(res)=>{
        this.Pname = res.filter(function(x:any){
          return x.id == params.get('id');
        })[0];
      }
    })
    //  this.product.getProducts().subscribe(c =>{
    //     console.log(c);
    //     this.contact = c;
    // })   
    });

  }
}
