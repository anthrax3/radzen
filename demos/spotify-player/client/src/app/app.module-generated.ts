/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RadzenModule } from '@radzen/angular';

import { AppRoutes } from './app.routes';
import { AppComponent, PageTitleComponent, NavigationMenuComponent } from './app.component';
export { AppComponent } from './app.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { TracksComponent } from './tracks/tracks.component';

import { SpotifyService } from './spotify.service';
import { SpotifyAuthorizationService } from './spotify-auth.service';
import { SpotifyAuthorizationInterceptor } from './spotify-auth.interceptor';

export const PageDeclarations = [
  NewReleasesComponent,
  TracksComponent,
  PageTitleComponent
];

export const AppDeclarations = [
  ...PageDeclarations,
  AppComponent,
  NavigationMenuComponent
];

export const AppProviders = [
  SpotifyService,
  SpotifyAuthorizationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpotifyAuthorizationInterceptor,
    multi: true
  },
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  RadzenModule,
  AppRoutes
];
