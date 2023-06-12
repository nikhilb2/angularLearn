import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "test",
  component: TestPageComponent
}, {
  path: "",
  component: HomeComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
