import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.scss'],
})
export class BookinfoComponent  {

  @Input() bookTitle:string=''; 
  @Input() bookImage:string='';
  @Input() bookDesc:string='';
  constructor() { }
}
