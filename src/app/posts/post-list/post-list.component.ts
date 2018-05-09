import { ResourceService } from './../../shared/resource.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from './post.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: [ './post-list.component.scss' ]
})
export class PostListComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/posts';

	posts$;

	constructor(private resourceService: ResourceService) {
		this.posts$ = resourceService.getResource<Posts[]>(this.url, 'title');
	}

	ngOnInit() {}
}
