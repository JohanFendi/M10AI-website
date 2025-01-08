import { inject } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";


/*Superclass that is inherited by componets who depend on windowsize*/
export class windowHandler {
    smallWindowQuery : string = `(max-width : 600px)`; 
    breakpointObserver = inject(BreakpointObserver); 

    //Sets up a observer to check if window matches query, returns true/false. 
    observeMediaQuery(mediaQuery:string) : boolean{
        let value : boolean = false; 
        this.breakpointObserver.observe([mediaQuery]).subscribe(
            (result) => {
                value = result.matches;  
            }
        )
        return value;
    }
}