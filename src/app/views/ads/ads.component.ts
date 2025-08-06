import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ads',
    templateUrl: './ads.html',
    styleUrls: ['./ads.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class AdsComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
