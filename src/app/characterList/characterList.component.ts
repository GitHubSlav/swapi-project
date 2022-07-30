import { Component, OnInit } from "@angular/core";
import { AnyARecord } from "dns";

@Component ({
    selector : "character-list",
    templateUrl : "./characterList.component.html",
    styleUrls: ["./characterList.component.css"]
})

export class CharacterListComponent implements OnInit{
    private _characters : Array<any> = [];
    private _planet : any;
    private _isLoaded : boolean = false;
    gender : string = "any";

    get characters(){
        if (this.gender === "any")
            return this._characters;
        else 
            return this._characters.filter(
                el => el.gender === this.gender
            );
    }

    get planet(){
        return this._planet;
    }

    get isLoaded(){
        return this._isLoaded;
    }

    ngOnInit(): void {
        fetch("data/planets.json")
        .then((response) => response.json())
        .then((response) => {
                this._planet = response.results[0];
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );

        fetch("data/people.json")
        .then((response) => response.json())
        .then((response) => {
                this._characters = response.results;
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