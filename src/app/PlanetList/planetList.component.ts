import { Component, OnInit } from "@angular/core";
import { IPlanet } from "../models/IPlanet";

@Component ({
    selector : "planet-list",
    templateUrl : "./planetList.component.html",
    styleUrls: ["./planetList.component.css"]
})

export class PlanetListComponent implements OnInit{
    private _planets : Array<IPlanet> = [];
    private _isLoaded : boolean = false;

    get planets(){
        return this._planets;
    }

    get isLoaded(){
        return this._isLoaded;
    }

    async fetchPlanets(){
        try {
            let page : number = 1;
            let response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
            let responseJSON = await response.json();

            this._planets = responseJSON.results;

            while (responseJSON.next !== null){
                page += 1;
                response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
                responseJSON = await response.json();
                this._planets.push(...responseJSON.results);
            }

            this._isLoaded = true;
        }
        catch(error) {
            console.log(error);
        }
    }

    ngOnInit(): void {
        this.fetchPlanets();
    }
}