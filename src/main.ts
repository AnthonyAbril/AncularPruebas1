import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import './pruebas - ts/01-tipos-basicos'
import './pruebas - ts/02-interface'
import './pruebas - ts/03-funciones'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
