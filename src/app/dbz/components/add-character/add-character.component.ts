import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from "uuid"

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
    @Output()
    // nuestra instancia de emisor de eventos
    public onNewCharacter: EventEmitter<Character> = new EventEmitter()

    public character: Character = {
        id: uuid(),
        name: "",
        power: 0
    }

    emitCharacter(): void {
        console.log(this.character)
        if (this.character.name === "") return
        this.onNewCharacter.emit(this.character)

        this.character = { id: "", name: "", power: 0 }
    }
}
