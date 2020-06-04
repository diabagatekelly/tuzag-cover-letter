import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QAComponent } from './qa/qa.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "qa", component: QAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
