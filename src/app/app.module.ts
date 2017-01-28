import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { PageTwoComponent } from './pagetwo/pagetwo.component'
import { PageNotFoundComponent } from './error/PageNotFound.component'
import { DataBindingComponent } from './databinding/databinding.component'
import { PipeComponent } from './pipe/pipe.component'

import { GoalService } from './home/goal.service'

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'page2', component: PageTwoComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageTwoComponent,
    DataBindingComponent,
    PageNotFoundComponent,
    PipeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
