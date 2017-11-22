import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {

	List() {
		return this.http.get("http://prs.doudsystems.com/Users/List");
	}

	constructor(private http: HttpClient) {}

}