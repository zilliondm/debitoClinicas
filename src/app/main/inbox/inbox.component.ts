import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DebitoClinicasService } from '../../service/debitoclinicas.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

export interface UserData {
    NFactura: string;
    FecCreacion: string;
    Clinica: string;
    Prestador: string;
    ComFacturacion: string;
    Estados: string;
}

/** Constants used to fill up our data base. */
const ESTADOS: string[] = [
    "Nueva",
    "Cerrada",
    "Refacturar",
    "Refacturary"
];
const NAMES: string[] = [
    "Maia",
    "Asher",
    "Olivia",
    "Atticus",
    "Amelia",
    "Jack",
    "Charlotte",
    "Theodore",
    "Isla",
    "Oliver",
    "Isabella",
    "Jasper",
    "Cora",
    "Levi",
    "Violet",
    "Arthur",
    "Mia",
    "Thomas",
    "Elizabeth"
];

const SURNAMES: string[] = [
    "Maia",
    "Asher",
    "Olivia",
    "Atticus",
    "Amelia",
    "Jack",
    "Charlotte",
    "Theodore",
    "Isla",
    "Oliver",
    "Isabella",
    "Jasper",
    "Cora",
    "Levi",
    "Violet",
    "Arthur",
    "Mia",
    "Thomas",
    "Elizabeth"
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: "inbox",
    styleUrls: ["inbox.component.scss"],
    templateUrl: "inbox.component.html"
})
export class InboxComponent implements OnInit {
    
    isShown: boolean = false;

    toggleShow() {
        this.isShown = !this.isShown;
    }
    displayedColumns: string[] = [
        "NFactura",
        "FecCreacion",
        "Clinica",
        "Prestador",
        "ComFacturacion",
        "Estados"
    ];

    items = ['012-346611-A', '012-346611-B', '012-346611-C', '012-757281-D','012-829123-E','012-972712-X','012-564565-L','012-231231-A']
    trackByFn(index, item) {
        return item.id;
      }

    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(debitoClinicasService: DebitoClinicasService, private _fuseSidebarService: FuseSidebarService,) {
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        //const users = debitoClinicasService.getFacturasEnc();

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

 
   toggleSidebarOpen(key): void
   {
       this._fuseSidebarService.getSidebar(key).toggleOpen();
   }


    getColor(Estados) {
        switch (Estados) {
            case "Cerrada":
                return "#43A047";
            case "Nueva":
                return "#0353E5";
            case "Refacturar":
                return "#F44336";
            case "Refacturary":
                return "#FFC107";
        }
    }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        " " +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        ".";

    const surnames =
        SURNAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        " " +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        ".";

    const fecCreacion = "22/11/2019";

    return {
        NFactura: id.toString(),
        FecCreacion: fecCreacion,
        Clinica: surnames,
        Prestador: name,
        ComFacturacion: Math.round(Math.random() * 100).toString(),
        Estados: ESTADOS[Math.round(Math.random() * (ESTADOS.length - 1))]
    };
}
