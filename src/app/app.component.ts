import { Component } from '@angular/core';
import { SettingScreenLauncherService } from './setting-screen-launcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pancake-swap-angular';
  marginTop: string = 'calc(70px + 56px)';

  constructor(public settingScreenLauncherService: SettingScreenLauncherService) { }

  getMarginTop(): string {
    return this.marginTop;
  }

  noPhishingMarginTop(): void {
    this.marginTop = '56px';
  }
}
