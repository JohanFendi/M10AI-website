import { NgIf, NgFor, NgStyle } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { windowHandler } from '../../app.windowHandler';
import { trigger, animate, style , state, transition} from '@angular/animations';


//Pure dataclass, defines a route, which should corespond to a page on the site.
class Route {
  constructor(public readonly link: string, public readonly name : string){}
}


@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations : [
    trigger('openClose', [
      state('closed', style({transform: "translateX(200px)" })),   
      state('open', style({transform: "translateX(-2px)"})),
      transition('open<=>closed', [animate('.5s ease-in')] )
    ])
  ]
    
  }
)


export class HeaderComponent extends windowHandler {
  private showMenu : boolean = false; //If hamburger is clicked, slide in the menu
  private readonly routeHeight : number = 4; //rem 
  public isSmallScreen : boolean = false; //If small screen, we show the hambuger menu, else regular nav

  public readonly routes : Route[] = [new Route("", "Home"),
                                      new Route("timeline", "Timeline"), 
                                      new Route("about-us", "About us")];
  public readonly menuHeight : string = (this.routes.length*this.routeHeight).toString() + "rem"; 

  //The observeMediaQuery function and smallWindowQuery are inherited from the windowHandler class
  ngOnInit() : void{
    this.isSmallScreen = this.observeMediaQuery(this.smallWindowQuery); 
  }

  toggleMenu() : void {
    this.showMenu = !this.showMenu; 
  }

  getMenuState() : string{
    if (this.showMenu){
      return "open"; //State identifier in the angular animation for the menu
    }
    return "closed"; //-||-
  }
}
