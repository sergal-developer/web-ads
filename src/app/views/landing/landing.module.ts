import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: LandingComponent, children: [] }]),
        // VIEWS
    ],
    declarations: [
        LandingComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        GoogleAnalyticsService
    ]
})
export class LandingModule {
}
