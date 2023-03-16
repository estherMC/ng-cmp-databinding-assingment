import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onTimerExecuted(interval: {timer: number}){
    console.log("Componente padre" + timer);


  }
}
