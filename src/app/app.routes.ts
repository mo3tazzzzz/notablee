import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LatestComponent } from './latest/latest.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'latest', component:LatestComponent},
    {path:'about', component:AboutComponent},
    {path:'**', component:NotFoundComponent}
];
