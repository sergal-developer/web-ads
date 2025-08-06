import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdsComponent } from './ads.component';
import { Ad001Component } from './components/ad001';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: AdsComponent, children: [] }]),
        // VIEWS
    ],
    declarations: [
        AdsComponent,
        Ad001Component
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AdsModule {
}
