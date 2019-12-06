import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent
{
    date: Date;
    notes: any[];
    settings: any;
    items = ['012-346611-A', '012-346611-B', '012-346611-C', '012-757281-D','012-829123-E','012-972712-X','012-564565-L','012-231231-A']

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };
    }
}
