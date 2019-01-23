import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Buku} from '../buku.model';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css']
})
export class BukuAddComponent implements OnInit {

  inputInfo: Buku = new Buku();

  @Output() bukuAdded: EventEmitter<Buku> = new EventEmitter<Buku>();

  constructor() {
  }

  ngOnInit() {
  }

  tambahBuku() {
    console.log(this.inputInfo);
    this.bukuAdded.emit(this.inputInfo);
    this.inputInfo = new Buku();
  }
}
