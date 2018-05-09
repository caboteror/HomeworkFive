import { ResourceService } from './resource.service';
import { PostListComponent } from './../posts/post-list/post-list.component';
import { CommentListComponent } from './../comments/comment-list/comment-list.component';
import { PostsModule } from './../posts/posts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsModule } from '../comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	exports: [ CardComponent ],
	providers: [ ResourceService ],
	declarations: [ CardComponent ]
})
export class SharedModule {}
