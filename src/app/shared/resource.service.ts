import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ResourceService {
	constructor(private http: HttpClient) {}

	getResource<T>(url: string, property: string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
				return collection.map((data) => data[property]);
			})
		);
	}
}
