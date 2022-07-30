import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector : "character-list",
    templateUrl : "./characterList.component.html",
    styleUrls: ["./characterList.component.css"]
})

export class CharacterListComponent implements OnInit{
    private _characters : Array<any> = [];
    private _planet : any;
    private _planet_id : number | undefined;
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

    constructor(private route: ActivatedRoute){
        this.route.params.subscribe(
            params => {
                this._planet_id = params["id"];
            }
        );
    }

    async fetchCharacters(){
        try {
            let response : any = await fetch(`https://swapi.dev/api/planets/${this._planet_id}`);
            this._planet = await response.json();

            for (let i = 0; i < this._planet.residents.length; i++){
                response = await fetch(this._planet.residents[i]);
                let responseJSON = await response.json();
                this._characters.push(responseJSON);
            }

            this._isLoaded = true;
        }
        catch(error) {
            console.log(error);
        }
    }

    ngOnInit(): void {
        this.fetchCharacters();
    }
}