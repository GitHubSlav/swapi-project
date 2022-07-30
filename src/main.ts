import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlanetListModule } from './app/PlanetList/planetList.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(PlanetListModule);