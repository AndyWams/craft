import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

import { MembersService } from "./../../services/members.service";
import { MembersModel } from "src/app/model/members-model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user;
  loading;
  constructor(
    private memberService: MembersService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showProfile();
  }
  showProfile() {
    this._route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.memberService.getMembersProfile(id).subscribe(user => {
        this.user = user.data;
        console.log(user);
      });
    });
  }
}
