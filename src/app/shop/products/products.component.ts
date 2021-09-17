import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'product-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  dataProducts: any

  @Input() name:string = "diego"
  @Input() price:number = 20000
  @Input() image:string = ""


  constructor() {}

  ngOnInit() {

  }

}

