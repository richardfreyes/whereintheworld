import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
	@Input() data: any;
	@Input() isShowMoreDetails: boolean = true;
	@Output() onClickCard: EventEmitter<any> = new EventEmitter<any>();
	

	constructor() { }

	ngOnInit(): void {
	}

	clickCard() {
		this.onClickCard.emit();
	}
}
