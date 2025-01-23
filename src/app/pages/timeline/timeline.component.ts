import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { windowHandler } from '../../app.windowHandler';


//Pure dataclass, defines a happening with a name and a date
class Happening{ 
  constructor(public readonly name: String, public readonly date : String){
  }
}

/*Pure dataclass, defines a timeline with a list of happenings 
and a height for each section of the timeline*/
class Timeline{  
  public readonly happeningHeight : String = "15rem"; // Used in the html to set
                                                      // the height of each timeline section
  constructor(public readonly happenings: Happening[]){ 
  }
}


@Component({
  selector: 'app-timeline',
  imports: [NgFor, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})


/*Class inherits functionality from the windowhandler class
inorder to handle window resizing.*/
export class TimelineComponent extends windowHandler{
  public smallTimeline: boolean = false; 
  private readonly happenings : Happening[] = [
                              new Happening("First Workshop", "2024-11-02"),
                              new Happening("M10AI Officially Founded", "2024-11-07"),
                              new Happening("Second Workshop", "2024-11-28"),
                              new Happening("Website launched", "2025-01-01"), new Happening("Second Workshop", "2024-11-28"),
                              new Happening("Website launched", "2025-01-01")
                              ]; 

  public readonly timeline : Timeline = new Timeline(this.happenings); 
  private readonly smallTimelineWidth : number = 400; //px



  //The observeMediaQuery function and smallWindowQuery are inherited from the windowHandler class
  ngOnInit() : void{
    this.smallTimeline = this.isSmallDevice(this.smallTimelineWidth); 
  }
}
