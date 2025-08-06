import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ads',
    templateUrl: './ads.html',
    styleUrls: ['./ads.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class AdsComponent implements OnInit {

    module:  string = '';

    constructor(private _router: Router,
        private _activeRouter: ActivatedRoute
    ) {

        this._activeRouter.params.subscribe((params: any) => {
            console.log('params: ', params);
            if(params) {
                this.module = params.id;
            }   
        })
    }

    ngOnInit(): void {
    }
}
