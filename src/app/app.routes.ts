import { Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path: "", pathMatch : "full", component : HomeComponent},
    {path: "aboutus", component : TimelineComponent}];
