import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cards = [
    {
      id: 1,
      title: 'Destinazioni',
      url: '/destinations',
      photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/60/85/e0/il-nostro-mare.jpg'
    },
    {
      id: 2,
      title: 'Transfer',
      url: '/transferts',
      photo: 'https://www.open.online/wp-content/uploads/2020/04/aereo1.jpg'
    },
    {
      id: 3,
      title: 'Contatti',
      url: '/contacts',
      photo: 'https://hd2.tudocdn.net/901167?w=1200&h=900'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
