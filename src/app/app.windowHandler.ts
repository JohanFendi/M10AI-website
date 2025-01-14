import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, inject  } from "@angular/core";


/*Superclass that is inherited by componets who vary depending on windowsize*/
export class windowHandler {
    protected readonly platformId = inject(PLATFORM_ID); 

    isSmallDevice(maxWidth : number) : boolean {
        if (isPlatformBrowser(this.platformId)){
            return window.innerWidth < maxWidth; 
        }
        return false; 
    }
}