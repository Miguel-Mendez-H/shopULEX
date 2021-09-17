import { Component, OnInit } from '@angular/core';
import { ShopServices } from './shop.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  dataArray: any;
  data: any[] = [];
  categories: any[] = [];
  categoriesXproducts: any;
  eans:any;


  constructor(public shopServices: ShopServices) { }

  ngOnInit() {

    this.getDataApi()
    this.filteringProducts()

  }

  getDataApi() {
    this.shopServices.getApi().subscribe(data => {
      this.dataArray = data
      this.categories = data.categories
    })
  }

  filteringProducts() {
    this.shopServices.getApi().subscribe(data => {
      this.dataArray = data
      let categoriesSanitized: any = {}
      this.categories.forEach((category: any) => {
        categoriesSanitized[category.id] = { ...category, products: [] }
      })
      this.dataArray.products.forEach((product: any) => {
        this.categories.forEach((category: any) => {
          product.product_data.categories.forEach((productCategory: any) => {
            if (category.id === productCategory.category_id) {
              categoriesSanitized[category.id].products.push(product.product_data)
            }
          });
        })
      })
      this.categoriesXproducts = Object.values(categoriesSanitized).sort(((a: any, b: any) => a.ordinal - b.ordinal))
      this.eans = this.categoriesXproducts[1].products.
      console.log(this.eans)
    })
  }


}






