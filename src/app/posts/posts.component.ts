import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  } 

}

export class Post {
  id: number
  userId: number
  title: string
  body: string
}
