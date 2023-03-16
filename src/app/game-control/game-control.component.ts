import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  chrono : number;
  @Output() timer = new EventEmitter<{chronoEmit: number}>();
  interval;

  constructor() {
    this.chrono = 0;
    this.chrono = this.chrono + 1;
    console.log(this.chrono)
  }

  ngOnInit(): void {
  }

  onStartChrono(){
    console.log("on start");
    this.chrono = 0;
    console.log(this.chrono)
    this.interval = setInterval(this.addUnitChrono, 100);
  }

  addUnitChrono(){
    console.log(this.chrono)
    console.log("add unit" + this.chrono);
    // this.chrono = this.chrono+1;
    // this.timer.emit({
    //   chronoEmit: this.chrono
    // })
  }

  onStopChrono(){
    console.log("on stop");
    clearInterval(this.interval); 
  }

}
