/*
  This file is automatically generated. Any changes will be overwritten.
  Modify new-releases.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { NotificationService } from '@radzen/angular';
import { GridComponent } from '@radzen/angular';

import { SpotifyService } from '../spotify.service';

export class NewReleasesGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild(GridComponent) grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  _location: Location;

  _subscription: Subscription;

  spotify: SpotifyService;

  releases: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.spotify = this.injector.get(SpotifyService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      this.parameters = parameters;
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.spotify.getNewReleases()
    .subscribe((result: any) => {
      this.releases = result.albums.items;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['tracks', event.id]));
  }
}
