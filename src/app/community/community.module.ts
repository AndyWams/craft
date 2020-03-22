import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommunityRoutingModule } from "./community-routing.module";
import { MembersComponent } from "./members/members.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [MembersComponent, ProfileComponent],
  imports: [CommonModule, CommunityRoutingModule]
})
export class CommunityModule {}
