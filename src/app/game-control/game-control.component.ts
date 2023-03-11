import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  chrono : number;
  @Output() serverCreated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    const intervalChrono = setInterval(this.addUnitChrono, 100);
  }

  addUnitChrono(){
    this.chrono = this.chrono+1;
  }

  onStop(){
    this.chrono = 0;
    clearInterval(intervalChrono); 
  }

}
