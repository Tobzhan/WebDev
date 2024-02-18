export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  img_path: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    img_path: 'https://ref40.com/wp-content/uploads/2019/03/x-1-1024x1024.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000',
    img_path: 'https://www.mstore.se/image/26941/iPhone_13_Pink_PDP_Image_Position-1A__WWEN.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'Фотокамера Sony Alpha A7 III kit 28-70mm',
    price: 1949,
    description: 'Камера α7 III от Sony сочетает в себе новую полнокадровую CMOS-матрицу с тыловой подсветкой и другие инновационные технологии формирования изображения. А высокая скорость отклика, простота использования и износостойкость камеры позволяют реализовать любые творческие замыслы.',
    link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-kit-28-70mm-103256988/?c=750000000',
    img_path: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h4f/64368651501598.jpg?format=gallery-medium',
    rating: 5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/