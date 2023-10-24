import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {
  data: any[] = [];
  randomCharacter: number = Math.floor(Math.random() * 20) + 1;
  characterNameReceived: string = '';
  character: any = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(): void {
    this.apiService.getData().subscribe(data => {
      this.data = data.results;
    });
  }

  searchCharacter(characterName: string): void {
    this.character = this.data.find(element => element.name === characterName);
    !this.character ? alert('Personaje no encontrado.') : ''; 
  }
}