import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    pathMatch: "full"
  },
  {
    path: "community",
    loadChildren: "src/app/community/community.module#CommunityModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
