import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedCountryComponent } from '@rcc/modules/detailed-country/detailed-country.component';
import { HomeComponent } from '@rcc/modules/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'detailed-country',
		component: DetailedCountryComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, 
			{ scrollPositionRestoration: 'enabled' }
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
