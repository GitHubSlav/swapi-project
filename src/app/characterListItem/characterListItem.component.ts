import { Component, Input } from "@angular/core";
import { ICharacter } from "./../models/ICharacter";

@Component ({
    selector : "character-li",
    templateUrl : "./characterListItem.component.html",
    styleUrls: ["./characterListItem.component.css"]
})

export class CharacterListItemComponent {
    @Input() character_info : ICharacter;
}