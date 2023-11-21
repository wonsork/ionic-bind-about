import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reserveinfo',
  templateUrl: './reserveinfo.component.html',
  styleUrls: ['./reserveinfo.component.scss'],
})
export class ReserveinfoComponent  implements OnInit {

  @Output() OutputReserveInfos = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}
  reserver:string='예약자01';

  sendBookInfo( ){
    this.OutputReserveInfos.emit(this.reserver);

    this.reserver='';
  }

}
