import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { AppRoutingModule } from "./app-routing.module";
import { LandingComponent } from "./landing/landing.component";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./core/header/header.component";
import { MembersService } from "./services/members.service";

@NgModule({
  declarations: [AppComponent, LandingComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    HttpClientModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
