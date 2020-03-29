import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MembersModel } from "src/app/model/members-model";

@Injectable({
  providedIn: "root"
})
export class MembersService {
  // api = "https://api.github.com"; // api from github
  api = "https://reqres.in/api/users"; //Api from regres.in
  constructor(private _http: HttpClient) {}

  getMembers() {
    return this._http.get<MembersModel>(`${this.api}`);
  }

  getMembersProfile(id: any) {
    return this._http.get<MembersModel>(`${this.api}/${id}`);
  }
}
