import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { EventBus, EventBusService } from '../../shared/events/EventBus.service';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class LandingComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller,
        private eventBusService: EventBusService,
        private _ga: GoogleAnalyticsService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _title: Title) {
    }

    ngOnInit(): void {
    }
}