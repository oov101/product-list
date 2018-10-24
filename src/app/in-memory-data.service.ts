import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { 
        id: 11,
        name: 'Żubr',
        kcal: 255,
        price: 2.35,
        description: "Piwo jasne, alk. 6.0% obj., pasteryzowane",
        addTime: "October 23rd 2018, 6:32:44 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010081.jpg"
      },
      { 
        id: 12,
        name: 'Kasztelan',
        kcal: 210,
        price: 1.99,
        description: "Piwo jasne, niepasteryzowane, mikrofiltrowane, alk. 5,6%",
        addTime: "October 23rd 2018, 6:33:47 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010759.jpg"
      },
      { 
        id: 13,
        name: 'Tyskie',
        kcal: 320,
        price: 2.69,
        description: "Piwo jasne, alk. 5,2% obj., pasteryzowane.",
        addTime: "October 23rd 2018, 6:35:12 pm",
        updateTime: "October 23rd 2018, 6:43:42 pm",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010209.jpg"
      },
      { 
        id: 14,
        name: 'Żywe',
        kcal: 240,
        price: 4.75,
        description: "Piwo jasne, pełne, mocne, alk. 6,2%",
        addTime: "October 23rd 2018, 6:35:46 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010543_0.jpg"
      },
      { 
        id: 15,
        name: 'Carlsberg',
        kcal: 160,
        price: 3.95,
        description: "Piwo jasne, pasteryzowane, alk. 5,0%",
        addTime: "October 23rd 2018, 6:41:22 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010347_3.jpg"
      },
      { 
        id: 16,
        name: 'Grolsch',
        kcal: 220,
        price: 6.65,
        description: "Piwo jasne pełne, pasteryzowane, alk. 5,0%",
        addTime: "October 23rd 2018, 6:42:34 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010711.jpg"
      },
      { 
        id: 17,
        name: 'Heineken',
        kcal: 175,
        price: 3.85,
        description: "Piwo jasne, pasteryzowane, alk. 5,0%",
        addTime: "October 23rd 2018, 6:43:55 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010748_0.jpg"
      },
      { 
        id: 18,
        name: 'Harnaś',
        kcal: 225,
        price: 2.25,
        description: "Piwo jasne, pasteryzowane, alk. 6,0%",
        addTime: "October 23rd 2018, 6:44:34 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010378_0.jpg"
      },
      { 
        id: 19,
        name: 'Corona Extra',
        kcal: 210,
        price: 3.99,
        description: "Piwo jasne, pełne, pasteryzowane, alk. 4,5%",
        addTime: "October 23rd 2018, 6:45:25 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10011267.jpg"
      },
      { 
        id: 19,
        name: 'Warka',
        kcal: 245,
        price: 4.65,
        description: "Piwo jasne, pełne, alk. 5,5 %",
        addTime: "October 23rd 2018, 6:47:31 pm",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010483.jpg"
      }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}