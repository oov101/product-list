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
        addTime: "23-10-2018 11:21",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010079_25.jpg"
      },
      { 
        id: 12,
        name: 'Kasztelan',
        kcal: 210,
        price: 1.99,
        description: "Piwo jasne, niepasteryzowane, mikrofiltrowane, alk. 5,6%",
        addTime: "23-10-2018 11:23",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010759.jpg"
      },
      { 
        id: 13,
        name: 'Tyskie',
        kcal: 320,
        price: 2.69,
        description: "Piwo jasne, alk. 5,2% obj., pasteryzowane.",
        addTime: "23-10-2018 11:25",
        updateTime: "23-10-2018 13:17",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010209_6.jpg"
      },
      { 
        id: 14,
        name: 'Żywe',
        kcal: 240,
        price: 4.75,
        description: "Piwo jasne, pełne, mocne, alk. 6,2%",
        addTime: "23-10-2018 11:26",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010543_0.jpg"
      },
      { 
        id: 15,
        name: 'Carlsberg',
        kcal: 160,
        price: 3.95,
        description: "Piwo jasne, pasteryzowane, alk. 5,0%",
        addTime: "23-10-2018 11:27",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010347_3.jpg"
      },
      { 
        id: 16,
        name: 'Grolsch',
        kcal: 220,
        price: 6.65,
        description: "Piwo jasne pełne, pasteryzowane, alk. 5,0%",
        addTime: "23-10-2018 11:28",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010711.jpg"
      },
      { 
        id: 17,
        name: 'Heineken',
        kcal: 175,
        price: 3.85,
        description: "Piwo jasne, pasteryzowane, alk. 5,0%",
        addTime: "23-10-2018 11:29",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010169_22.jpg"
      },
      { 
        id: 18,
        name: 'Harnaś',
        kcal: 225,
        price: 2.25,
        description: "Piwo jasne, pasteryzowane, alk. 6,0%",
        addTime: "23-10-2018 11:30",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10010378_0.jpg"
      },
      { 
        id: 19,
        name: 'Corona Extra',
        kcal: 210,
        price: 3.99,
        description: "Piwo jasne, pełne, pasteryzowane, alk. 4,5%",
        addTime: "23-10-2018 11:31",
        updateTime: "",
        photoURL: "http://www.kmdelikatesy.pl/files/imagecache/product_full/zdjecia_produktow/10011267.jpg"
      },
      { 
        id: 19,
        name: 'Warka',
        kcal: 245,
        price: 4.65,
        description: "Piwo jasne, pełne, alk. 5,5 %",
        addTime: "23-10-2018 11:32",
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