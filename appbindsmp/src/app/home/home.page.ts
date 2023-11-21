import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bookName:string='THE MIND';
  bookImage:string='https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788901276571.jpg';
  bookDesc:string ="이달의 추천도서!!!"
  constructor() {}

}

