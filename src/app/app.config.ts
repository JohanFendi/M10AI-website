import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideAnimations(),
  provideRouter(routes, 
    withInMemoryScrolling(
    {
      scrollPositionRestoration: 'top'
    }
  )
  ), provideClientHydration(withEventReplay())]
};
