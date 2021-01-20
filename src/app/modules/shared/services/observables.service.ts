import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class ObservablesService {
	private dataSource = new BehaviorSubject('');
	currentCountryData = this.dataSource.asObservable();

	constructor() { }
	
	getDetailedCountryData(data: any) {
		this.dataSource.next(data)
	}
}
