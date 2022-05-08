export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'SmartPhone XL',
    price: 799,
    description: 'Nuestro teléfono más grande con la mejor pantalla.',
  },
  {
    id: 2,
    name: 'SmartPhone Mini',
    price: 699,
    description: 'Un gran teléfono con la mejor cámara integrada',
  },
  {
    id: 3,
    name: 'SmartPhone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
