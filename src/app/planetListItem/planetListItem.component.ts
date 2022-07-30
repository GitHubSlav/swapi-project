import { Component, Input } from "@angular/core";

@Component ({
    selector : "planet-li",
    templateUrl : "./planetListItem.component.html",
    styleUrls: ["./planetListItem.component.css"]
})

export class PlanetListItemComponent {
    private _isBlinking : boolean = false;

    @Input() planet_info : any;

    get isBlinking(){
        return this._isBlinking;
    }
    
    OnMouseEnter(){
        this._isBlinking = true;
    }

    OnMouseLeave(){
        this._isBlinking = false;
    }

    OnClick(){
        
    }
}