import { Component, Input } from "@angular/core";

@Component ({
    selector : "planet-p",
    templateUrl : "./planetPresentational.component.html",
    styleUrls: ["./planetPresentational.component.css"]
})

export class PlanetPresentationalComponent {
    @Input() planet_info : any;
}