import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from '@rcc/modules/home/home.component';
import { DetailedCountryComponent } from '@rcc/modules/detailed-country/detailed-country.component';
import { TopBarComponent } from '@rcc/shared/components/top-bar/top-bar.component';
import { CardListComponent } from '@rcc/shared/components/card-list/card-list.component';
import { CardDetailViewComponent } from '@rcc/shared/components/card-detail-view/card-detail-view.component';
import { EmptyStateComponent } from '@rcc/shared/components/empty-state/empty-state.component';
import { ButtonComponent } from '@rcc/shared/components/button/button.component';
import { CountriesEffects } from '@rcc/shared/store/countries/effects/countries.effect';
import { SearchBarComponent } from '@rcc/shared/components/search-bar/search-bar.component';
import * as fromCountries from '@rcc/shared/store/countries/index';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from '@rcc/root/app-routing.module';
import { CommaSeparatorPipe } from './pipes/comma-separator.pipe';



@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		StoreModule.forFeature('country', fromCountries.SharedModuleActionReducers),
		EffectsModule.forFeature([CountriesEffects]),
		HttpClientModule,
		Ng2SearchPipeModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		InfiniteScrollModule,
		MatProgressSpinnerModule,
		AppRoutingModule
	],
	declarations: [
		HomeComponent,
		DetailedCountryComponent,
		TopBarComponent,
		CardListComponent,
		CardDetailViewComponent,
		ButtonComponent,
		SearchBarComponent,
		EmptyStateComponent,
		CommaSeparatorPipe
	],
	exports: [
		TopBarComponent,
		CardListComponent,
		CardDetailViewComponent,
		ButtonComponent
	]
})
export class SharedModule { }
