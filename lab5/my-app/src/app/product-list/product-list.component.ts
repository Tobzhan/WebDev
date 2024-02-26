import { Component } from '@angular/core';
import { products } from '../products';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  img_path: string;
  rating: number;
  category: string;
  likes: number; // Add the likes property
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  categories: string[] = [];

  constructor() {
    this.categories = this.getUniqueCategories();
  }

  getUniqueCategories(): string[] {
    const uniqueCategories = new Set<string>();
    this.products.forEach(product => {
      uniqueCategories.add(product.category);
    });
    return Array.from(uniqueCategories);
  }

  selectedCategories: string[] = [];

  filterProducts() {
    if (this.selectedCategories.length === 0) {
      return [];
    } else {
      return this.products.filter(product => this.selectedCategories.includes(product.category));
    }
  }

  onCategoryChange(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  increaseLikes(product: Product) {
    product.likes++;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  
  share(link : string) {
    const shareMessage = `Product: ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/