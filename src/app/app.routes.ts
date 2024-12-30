import { Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {path: "", pathMatch : "full", component : HomeComponent},
    {path: "timeline", component : TimelineComponent},
    {path: "about-us", component: AboutUsComponent}
];
