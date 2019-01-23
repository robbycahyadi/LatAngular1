import {Component, OnInit} from '@angular/core';
import {Buku} from '../buku.model';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css']
})
export class BukuAddComponent implements OnInit {

  inputInfo: Buku = new Buku();

  constructor() {
  }

  ngOnInit() {
  }

  tambahBuku() {
    console.log(this.inputInfo);
  }
}
