import {Component, Input, OnInit} from '@angular/core';
import {Buku} from '../buku.model';
import {BukusService} from '../bukus.service';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css'],
  providers: [BukusService]
})
export class BukuListComponent implements OnInit {
  @Input() bukuParent: Buku[];
  constructor(private bukus: BukusService) { }

  ngOnInit() {
  }

  hapus(idx: number) {
    this.bukuParent.splice(idx, 1);
  }

  quantityBuku() {
    return this.bukus.quantity(this.bukuParent);
  }

  pinjam() {
    let txt = '';
    for (const buk of this.bukuParent) {
      txt = txt + 'ISBN: ' + buk.isbn + '\n';
      txt = txt + 'Nama: ' + buk.nama + '\n';
      txt = txt + 'Quantity: ' + buk.quantity + '\n';
      txt = txt + '\n';
    }
    alert(txt);
  }

}
