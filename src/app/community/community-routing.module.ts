import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MembersComponent } from "./members/members.component";

import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: MembersComponent
  },
  {
    path: "users/:id",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {}
