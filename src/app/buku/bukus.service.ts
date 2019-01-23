import { Injectable } from '@angular/core';
import {Buku} from './buku.model';

@Injectable({
  providedIn: 'root'
})
export class BukusService {

  constructor() { }

  quantity(bukuInfo: Buku[]): number {
    let total = 0;
    for (const buk of bukuInfo) {
      total = total + buk.quantity;
    }
    return total;
  }
}
