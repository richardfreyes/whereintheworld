import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ObservablesService } from '@rcc/shared/services/observables.service';

@Component({
	selector: 'app-card-detail-view',
	templateUrl: './card-detail-view.component.html',
	styleUrls: ['./card-detail-view.component.scss']
})
export class CardDetailViewComponent implements OnInit {
	@Output() onClickedBack: EventEmitter<any> = new EventEmitter<any>();
	selectedCountryData: any;

	constructor(
		private observableData: ObservablesService
	) { }

	ngOnInit(): void {
		this.autoRun();
	}

	autoRun() {
		this.initialisers();
		this.listeners();
	}

	initialisers() {

	}

	listeners() {
		this.listenHomeSelectedCountry();
	}

	listenHomeSelectedCountry() {
		this.observableData.currentCountryData.subscribe((selectedCountryData: any) => {
			this.selectedCountryData = selectedCountryData;
		});
	}

	close(): void {
		this.onClickedBack.emit();
	}
}
