export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  img_path: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    img_path: 'https://ref40.com/wp-content/uploads/2019/03/x-1-1024x1024.jpg',
    rating: 5,
    category: 'phone',
    likes: 0
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000',
    img_path: 'https://www.mstore.se/image/26941/iPhone_13_Pink_PDP_Image_Position-1A__WWEN.jpg',
    rating: 4,
    category: 'phone',
    likes: 0
  },
  {
    id: 3,
    name: 'Фотокамера Sony Alpha A7 III kit 28-70mm',
    price: 1949,
    description: 'Камера α7 III от Sony сочетает в себе новую полнокадровую CMOS-матрицу с тыловой подсветкой и другие инновационные технологии формирования изображения. А высокая скорость отклика, простота использования и износостойкость камеры позволяют реализовать любые творческие замыслы.',
    link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-kit-28-70mm-103256988/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h4f/64368651501598.jpg?format=gallery-medium',
    rating: 5,
    category: 'camera',
    likes: 0
  },
  {
    id: 4,
    name: 'Электрочайник BEREKE BR-810 серый',
    price: 4,
    description: 'Чайник',
    link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
    rating: 2,
    category: 'technika',
    likes: 0
  },
  {
    id: 5,
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
    price: 3.55,
    description: 'назначение прибора: увлажнение воздуха',
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium',
    rating: 5,
    category: 'technika',
    likes: 0
  },
  {
    id: 6,
    name: 'Кухонные весы Generic SF-400',
    price: 2.99,
    description: 'тип: электронные',
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
    rating: 5,
    category: 'technika',
    likes: 0
  },
  {
    id: 7,
    name: 'Кухонные весы PickMe SF-400',
    price: 6.99,
    description: 'тип: электронные',
    link: 'https://kaspi.kz/shop/p/pickme-sf-400-103844317/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h77/64275894468638.jpg?format=gallery-medium',
    rating: 4,
    category: 'technika',
    likes: 0
  },
  {
    id: 8,
    name: 'Утюг Orvica ORM-3511 черный, зеленый',
    price: 2.99,
    description: 'тип: электронные',
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h1e/66749608853534.jpg?format=gallery-medium',
    rating: 5,
    category: 'technika',
    likes: 0
  },
  {
    id: 9,
    name: 'Микроволновая печь Magna M20B7002-S серый',
    price: 55.99,
    description: 'тип: электронные',
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h40/67838355963934.jpg?format=gallery-medium',
    rating: 1,
    category: 'technika',
    likes: 0
  },
  {
    id: 10,
    name: 'Стиральная машина Samsung WW60AG4S00CELD белый',
    price: 1,
    description: 'тип: электронные',
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h11/82896148693022.jpg?format=gallery-medium',
    rating: 5,
    category: 'washer',
    likes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/