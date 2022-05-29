import { NgModule } from '@angular/core';
import { PoolsComponent } from './views/pools/pools.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { EarnRoutingModule } from './earn-routing.module';
import { FarmsComponent } from './views/farms/farms.component';
import { EarnTopComponent } from './views/earn-top.component';

@NgModule({
    declarations: [
        PoolsComponent,
        FarmsComponent,
        EarnTopComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        EarnRoutingModule
    ],
    exports: [
        EarnTopComponent
    ]
})
export class EarnModule { }