import { CardComponent } from './../shared/card/card.component';
import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, SharedModule ],
	exports: [ PostListComponent ],
	declarations: [ PostListComponent ]
})
export class PostsModule {}
