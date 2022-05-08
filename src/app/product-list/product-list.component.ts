import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('El producto ha sido compartido!');
  }

  /*
  Define the behavior that happens when the user clicks the button. The parent, ProductListComponent —not the ProductAlertsComponent— acts when the child raises the event. In product-list.component.ts, define an onNotify() method, similar to the share() method.
  */
  onNotify() {
    window.alert('Serás notificado cuando este producto salga a la venta.');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
