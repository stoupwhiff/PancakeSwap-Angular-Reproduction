import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { FooterMobileComponent } from './core/footer-mobile/footer-mobile.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { HeroComponent } from './views/homepage/components/hero/hero.component';
import { PhishingBarComponent } from './core/navbar/components/phishing-bar/phishing-bar.component';
import { NavbarProperComponent } from './core/navbar/components/navbar-proper/navbar-proper.component';
import { BtnStandardSmallComponent } from './shared/btn-standard-small/btn-standard-small.component';
import { BtnStandardBigComponent } from './shared/btn-standard-big/btn-standard-big.component';
import { BtnTransparentComponent } from './shared/btn-transparent/btn-transparent.component';
import { DarkModeButtonComponent } from './shared/dark-mode-button/dark-mode-button.component';
import { DarkModeBtnSunComponent } from './shared/dark-mode-button/dark-mode-btn-sun/dark-mode-btn-sun.component';
import { DarkModeBtnMoonComponent } from './shared/dark-mode-button/dark-mode-btn-moon/dark-mode-btn-moon.component';
import { ToogleBtnComponent } from './shared/toogle-btn/toogle-btn.component';
import { NavModalsComponent } from './core/nav-modals/nav-modals.component';
import { SettingScreenContentConnectWalletComponent } from './core/nav-modals/setting-screen-content-connect-wallet/setting-screen-content-connect-wallet.component';
import { SettingScreenContentSettingMenuComponent } from './core/nav-modals/setting-screen-content-setting-menu/setting-screen-content-setting-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterMobileComponent,
    HomepageComponent,
    HeroComponent,
    PhishingBarComponent,
    NavbarProperComponent,
    BtnStandardSmallComponent,
    BtnStandardBigComponent,
    BtnTransparentComponent,
    DarkModeButtonComponent,
    DarkModeBtnSunComponent,
    DarkModeBtnMoonComponent,
    ToogleBtnComponent,
    NavModalsComponent,
    SettingScreenContentConnectWalletComponent,
    SettingScreenContentSettingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
