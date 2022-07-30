import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PlanetListComponent } from "../PlanetList/planetList.component";
import { PlanetListItemComponent } from "../planetListItem/planetListItem.component"
import { CharacterListComponent } from '../characterList/characterList.component';
import { CharacterListItemComponent } from '../characterListItem/characterListItem.component';
import { PlanetPresentationalComponent } from '../planetPresentational/planetPresentational.component';
import { LoadingBarComponent } from '../loadingBar/loadingBar.component';

const appRoutes: Routes = [
    { path: '', component: PlanetListComponent},
    { path: 'planets/:id', component: CharacterListComponent},
    { path: '**', redirectTo: '/'}
]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent, PlanetListComponent, 
        PlanetListItemComponent, CharacterListComponent, 
        CharacterListItemComponent, LoadingBarComponent,
        PlanetPresentationalComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}