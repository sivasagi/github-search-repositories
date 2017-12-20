import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import{ SharedService } from './shared.service';

const appRoutes : Routes = [
                          {path:'',redirectTo: '/home', pathMatch: 'full' },
                          {path:'home',component:HomeComponent},
                          {path:'results',component:ResultsComponent},
                          {path:'results/:id',component:DetailsComponent},
                          {path:'not-found',component:PageNotFoundComponent},
                          //This shold be always in last position
                          {path:'**',redirectTo:'/not-found'}
                         ];

@NgModule({
  declarations: [  
    AppComponent,
    ResultsComponent,
    PageNotFoundComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
