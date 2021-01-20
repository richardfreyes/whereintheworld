import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from '@rcc/root/app-routing.module';
import { AppComponent } from '@rcc/modules/core/app.component';
import { SharedModule } from '@rcc/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({} as any),
		EffectsModule.forRoot([] as Array<any>),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument({
      name: 'RCC DevTools'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
