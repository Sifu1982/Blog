import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];


  constructor(private postsService: PostsService) {
    this.posts = [];
  }



  async ngOnInit() {
    try {
      this.posts = await this.postsService.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }
}
