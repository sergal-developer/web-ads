import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AdsComponent } from './ads.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: AdsComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        TranslateModule
    ],
    declarations: [
        AdsComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AdsModule {
}
