import { Injectable } from '@angular/core';

@Injectable()
export class CakeService {

  constructor() { }

  getCakes() {
    return cakes;
  }

}

const cakes = [{
  id: 1,
  name: 'Chocolate Cake',
  imageUrl: '/assets/images/chocolate.jpg'
}, {
  id: 2,
  name: 'Fish Cake',
  imageUrl: '/assets/images/fishcake.jpg'
}]