import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss']
})
export class TradeCardComponent implements OnInit {

  constructor(private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  connect(): void {
    this.modalService.openModal('connect');
  }

}