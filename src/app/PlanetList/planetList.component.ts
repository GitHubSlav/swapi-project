import { Component, OnInit } from "@angular/core";

@Component ({
    selector : "planet-list",
    templateUrl : "./planetList.component.html",
    styleUrls: ["./planetList.component.css"]
})

export class PlanetListComponent implements OnInit{
    private _planets : Array<any> = [];
    private _isLoaded : boolean = false;

    get planets(){
        return this._planets;
    }

    get isLoaded(){
        return this._isLoaded;
    }

    ngOnInit(): void {
        fetch("data/planets.json")
        .then((response) => response.json())
        .then((response) => {
                this._planets = response.results;
                this._isLoaded = true;
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }
}