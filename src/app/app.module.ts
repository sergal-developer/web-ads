import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { EventBusService } from './shared/events/EventBus.service';
import { GoogleAnalyticsService } from './shared/services/google.analytics.service';
import { AdsModule } from './views/ads/ads.module';
import { LandingModule } from './views/landing/landing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
        FormsModule,
        LandingModule,
        AdsModule],
    providers: [EventBusService, GoogleAnalyticsService ]
})
export class AppModule { }
