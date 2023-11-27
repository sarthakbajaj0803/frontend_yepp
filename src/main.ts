import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import routeConfig from "./app/routes";

import { AppModule } from './app/app.module';
import {bootstrapApplication, provideProtractorTestingSupport} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";

import { defineCustomElements } from '@sfc/components/dist/loader';



bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]

  }


).then(()=>{
  defineCustomElements(window, {
    resourcesUrl: 'sfc/',
  });
}).catch(err => console.error(err));
