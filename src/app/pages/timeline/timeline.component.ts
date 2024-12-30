import { Component, PLATFORM_ID } from '@angular/core';
import { NgFor, NgIf,  isPlatformBrowser, isPlatformServer } from '@angular/common';

class Happening{
  name : String = ""; 
  date : String = "";
  
  constructor(name: String, date : String){
    this.name = name; 
    this.date = date; 
  }
}

class Timeline{
  happenings : Happening[] = []; 
  happeningHeight : number = 15; //rem
  height : Number = 0; 

  constructor(happenings: Happening[]){
    this.height = happenings.length * this.happeningHeight; 
    this.happenings = happenings; 
  }
 
  getHappeningHeight(){
    return this.happeningHeight.toString() + "rem"; 
  }

}

@Component({
  selector: 'app-timeline',
  imports: [NgFor, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent { 
  ngOnInit() {
      window.scroll(0,0);
  }


  happenings : Happening[] = [
                              new Happening("First Workshop", "2024-11-02"),
                              new Happening("M10AI Officially Founded", "2024-11-07"),
                              new Happening("Second Workshop", "2024-11-28"),
                              new Happening("Website launched", "2025-01-01")
                       
                              ]; 

  timeline : Timeline = new Timeline(this.happenings); 
}
