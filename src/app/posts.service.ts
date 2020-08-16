import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Cocina creativa',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto aperiam eaque temporibus aliquid omnis quam accusamus doloribus minus tempore vel at pariatur ullam. Recusandae ipsam impedit excepturi aliquid atque!',
        autor: 'David Martínez Trigo',
        imagen: 'https://www.kitchenclub.es/161-large_default/cocina-creativa.jpg',
        fecha: new Date(),
        categoria: 'COCINA'
      }
    ];
  }

  // agregarPostSinPromesa(pNewPost): Post[] {
  //   this.arrPosts.push(pNewPost);
  //   return this.arrPosts;
  // }

  // agregarPost(pNewPost): Promise<Post[]> {
  //   return new Promise((resolve, reject) => {
  //     this.arrPosts.push(pNewPost);
  //     resolve(this.arrPosts);
  //   });
  // }

  agregarPost(pNewPost: Post): Promise<Post[]> {
    this.arrPosts.push(pNewPost);
    return Promise.resolve(this.arrPosts);
  }

  // agregarPost(pNewPost: Post) {
  //   this.arrPosts.push(pNewPost);
  // }

  // getAllPosts(): Promise<Post[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(this.arrPosts);
  //   });
  // }


  getAllPosts(): Promise<Post[]> {
    return Promise.resolve(this.arrPosts);
  }


  // getPostsByCategoria(pCat): Promise<Post[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(this.arrPosts.filter(post => {
  //       return post.categoria === pCat;
  //     }));
  //     reject(console.log('Error'));
  //   });
  // }

  getPostsByCategoria(pCat): Promise<Post[]> {
    return Promise.resolve(this.arrPosts.filter(post => post.categoria === pCat));
  }


}
