import { ResourceService } from './../../shared/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-comment-list',
	templateUrl: './comment-list.component.html',
	styleUrls: [ './comment-list.component.scss' ]
})
export class CommentListComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/comments';

	comments$;

	constructor(private resourceService: ResourceService) {
		this.comments$ = resourceService.getResource<Comment[]>(this.url, 'body');
	}

	ngOnInit() {}
}
