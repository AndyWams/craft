import { Component, OnInit } from "@angular/core";
import { MembersService } from "./../../services/members.service";
import { Router } from "@angular/router";
import { MembersModel } from "src/app/model/members-model";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"]
})
export class MembersComponent implements OnInit {
  loading;
  members: any;
  constructor(private memeberService: MembersService, private router: Router) {}

  ngOnInit() {
    // this.members = this.memeberService.getMembers();
    this.memeberService.getMembers().subscribe((data: MembersModel) => {
      this.members = data.data;
      console.log(this.members);
    });
  }
}
