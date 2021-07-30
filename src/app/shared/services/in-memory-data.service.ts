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
          'https://www.thesmoothescape.com/wp-content/uploads/2020/05/Palermo-cathedral.jpg'
        ]
      },
      {
        id: 2,
        title: 'Catania',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg'
        ]
      },
      {
        id: 3,
        title: 'Monreale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg'
        ]
      },
      {
        id: 4,
        title: 'Cefalù',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg'
        ]
      },
      {
        id: 5,
        title: 'Cefalù',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg'
        ]
      },
      {
        id: 6,
        title: 'Cefalù',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat purus ac elit molestie, suscipit dictum lacus bibendum. Duis ac dapibus lacus. Vestibulum volutpat rutrum nisl. Cras sollicitudin fermentum odio et imperdiet. Nulla porttitor enim velit, sed ullamcorper nunc dictum cursus. Vivamus eget facilisis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam magna augue, euismod nec augue auctor, fermentum scelerisque lorem. Donec a blandit neque, in facilisis lorem. Aenean sed vestibulum dui. Fusce eu nunc vitae nulla bibendum porttitor.',
        photoUrl: [
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg',
          'https://www.italyguides.it/images/gridfolio/palermo/palermo.01.jpg'
        ]
      }
    ];

    const transferts = [
      {
        id: 1,
        dest: "Palermo - Catania",
        price: 10.50
      },
      {
        id: 2,
        dest: "Palermo - Aeroporto",
        price: 7.00
      },
      {
        id: 3,
        dest: "Mondello",
        price: 12.35
      }
    ];

    return {trips, transferts};
  }


  genId(trips: Trip[]): number {
    return trips.length > 0 ? Math.max(...trips.map(trip => trip.id)) + 1 : 1;
  }
}
