import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { AppRoutingModule } from "./app-routing.module";
import { LandingComponent } from "./landing/landing.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";

@NgModule({
  declarations: [AppComponent, LandingComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
