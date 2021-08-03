import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Transfert } from '../model/transfert';
import { Trip } from '../model/trip';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trips = [
      {
        id: 1,
        title: 'Palermo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.thesmoothescape.com/wp-content/uploads/2020/05/Palermo-cathedral.jpg',
          'http://palermo.mobilita.org/wp-content/uploads/sites/6/2020/04/palermo1.jpg'
        ]
      },
      {
        id: 2,
        title: 'Catania',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.sicilias.it/wp-content/uploads/2020/01/catania-blog-1236x825.jpg',
          'https://www.notiziecatania.it/wp-content/uploads/2021/04/duomocatania.jpg',
          'https://media.wsimag.com/attachments/c136370300090bb0036365d9803ee03d3d04e432/store/fill/1090/613/af084ff3385afe0b0babffea85249c202535fc1fc86db692a3c7ea86cff1/Veduta-di-Catania.jpg'
        ]
      },
      {
        id: 3,
        title: 'Monreale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.vacanzesiciliane.net/wp-content/uploads/2016/12/duomo-di-monreale-sicilia.jpg',
          'https://www.touringclub.it/sites/default/files/styles/gallery_full/public/immagini_georiferite/panoramica_del_complesso2.jpg?itok=L8fEI4-W',
          'https://www.hitsicily.com/_files/uploads/chiostro-monreale-palermo-sicily-3.jpg'
        ]
      },
      {
        id: 4,
        title: 'Cefalù',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://media-cdn.tripadvisor.com/media/photo-s/0f/0a/55/4b/cefalu-una-vista-del.jpg',
          'https://www.labisialacarte.it/wp-content/uploads/2020/07/cefalu-basilica-cattedrale-02.jpg',
          'https://www.cefaluhouse.it/wp-content/uploads/2021/02/roccacefalu-1140x760.jpg'
        ]
      },
      {
        id: 5,
        title: 'Taormina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.10cose.it/wp-content/uploads/2015/09/taormina.jpg',
          'https://www.italiavai.com/travelguide-img/spiagge-taormina-isola-bella.jpg',
          'https://www.turismo.it/typo3temp/pics/dfd37b6a2e.jpg'
        ]
      },
      {
        id: 6,
        title: 'Trapani',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://dpv87w1mllzh1.cloudfront.net/alitalia_discover/attachments/data/000/002/301/original/TRAPANI-The-Trapani-salt-pans-what-to-see-1920x1080.jpg?1540283729',
          'https://www.sicilying.com/immagini-offerte/offerta_1009/1009__Dv.jpg',
          'https://qds.it/wp-content/uploads/2021/01/10359.jpg'
        ]
      }
    ];

    const transferts = [
      {
        id: 1,
        dest: "Palermo - Aeroporto",
        price: 45
      },
      {
        id: 2,
        dest: "Palermo - Catania",
        price: 180
      },
      {
        id: 3,
        dest: "Palermo - Trapani",
        price: 90
      },
      {
        id: 4,
        dest: "Tour Taormina",
        price: 200
      },
      {
        id: 5,
        dest: "Tour Siracusa",
        price: 250
      },
      {
        id: 6,
        dest: "Mondello",
        price: 35
      },
      {
        id: 7,
        dest: "Tour Cefalù - 3 ore",
        price: 180
      },
      {
        id: 8,
        dest: "San Vito Lo Capo",
        price: 120
      },
    ];

    return {trips, transferts};
  }


  genId(trips: Trip[]): number {
    return trips.length > 0 ? Math.max(...trips.map(trip => trip.id)) + 1 : 1;
  }
}
