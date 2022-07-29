import { Component, Input } from "@angular/core";

@Component ({
    selector : "character-li",
    templateUrl : "./characterListItem.component.html",
    styleUrls: ["./characterListItem.component.css"]
})

export class CharacterListItemComponent {
    @Input() character_info : any;
}