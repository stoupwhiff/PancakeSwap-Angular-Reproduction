import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WinRoutingModule } from './win-routing';
import { WinTopComponent } from './views/win-top.component';
import { CompetitionComponent } from './views/competition/competition.component';
import { HeroCompetitionComponent } from './components/hero-competition/hero-competition.component';
import { CalculatingComponent } from './components/calculating/calculating.component';
import { YourScoreComponent } from './components/your-score/your-score.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { TeamRanksComponent } from './components/team-ranks/team-ranks.component';
import { RibbonTitleComponent } from './components/ribbon-title/ribbon-title.component';
import { CompetitionTableComponent } from './components/competition-table/competition-table.component';
import { PrizesComponent } from './components/prizes/prizes.component';

@NgModule({
    declarations: [
        WinTopComponent,
        CompetitionComponent,
        HeroCompetitionComponent,
        CalculatingComponent,
        YourScoreComponent,
        RibbonComponent,
        TeamRanksComponent,
        RibbonTitleComponent,
        CompetitionTableComponent,
        PrizesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        WinRoutingModule
    ],
    exports: [
        WinTopComponent
    ]
})
export class WinModule { }