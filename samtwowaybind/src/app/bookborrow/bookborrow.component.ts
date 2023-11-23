import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookborrow',
  templateUrl: './bookborrow.component.html',
  styleUrls: ['./bookborrow.component.scss'],
})
export class BookborrowComponent  implements OnInit {


  @Input() rentable:boolean = false;
  @Output() borrowOrder = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  changeRentToggle( $event: CustomEvent){
    console.log( "Value " + $event.detail.checked);
    console.log( $event.detail.value);
  }

  borrow(){
    this.rentable = false;
  }
  returnbook(){
    this.rentable = true;
  }
}
