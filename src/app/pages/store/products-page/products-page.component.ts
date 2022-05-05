import { Observable } from 'rxjs';
import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<any[]> | undefined;
  data: any;

  constructor(data: DataService) { }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }

}
