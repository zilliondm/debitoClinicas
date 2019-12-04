import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { HistoryComponent } from './history.component';

const routes = [
    {
        path     : 'history',
        component: HistoryComponent
    }
];

@NgModule({
    declarations: [
        HistoryComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    exports     : [
        HistoryComponent
    ]
})

export class HistoryModule
{
}
