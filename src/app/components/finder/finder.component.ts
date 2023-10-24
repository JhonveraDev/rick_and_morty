import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent {
  characterName: string = '';

  @Output() characterSearch = new EventEmitter<string>();

  getCharacter() {
    console.log(this.characterName);
    this.characterSearch.emit(this.characterName)
    // this.character = this.data.find(element => element.name === 'Rick Sanchez');
  }
}
