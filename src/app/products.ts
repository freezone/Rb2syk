export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 4,
    name: 'My super product',
    price: 199,
    description: 'Description with a \<strong\>bold\<\/strong\> text',
    urlName: "my-super-product"
  },
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    urlName: 'phone-xl'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    urlName: 'phone-mini'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    urlName: 'phone-standard'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/