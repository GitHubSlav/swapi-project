import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PlanetListComponent } from "./planetList.component";
import { PlanetListItemComponent } from "../planetListItem/planetListItem.component"


@NgModule({
    imports: [BrowserModule],
    declarations: [PlanetListComponent, PlanetListItemComponent],
    bootstrap: [PlanetListComponent]
})

export class PlanetListModule {}