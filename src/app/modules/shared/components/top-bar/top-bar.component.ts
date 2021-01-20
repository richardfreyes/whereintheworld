import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	isDarkTheme: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.autoRun();
	}

	autoRun() {
		this.initialisers();
		this.listeners();
	}

	initialisers() {
		this.initTheme();
	}

	listeners() {

	}

	initTheme() {
		this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true:false;
		if(this.isDarkTheme) {
			document.body.classList.remove("light-theme");
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
			document.body.classList.add("light-theme");

		}
	}

	storeThemeSelection() {
		this.isDarkTheme = !this.isDarkTheme;
		localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
		this.initTheme();
	}
}
