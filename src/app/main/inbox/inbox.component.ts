import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DebitoClinicasService } from '../../service/debitoclinicas.service';

export interface UserData {
    //id: string;
    //name: string;
    //progress: string;
    //color: string;

    NFactura: string;
    FecCreacion: string;
    FecVencimiento: string;
    Clinica: string;
    Prestador: string;
    ComFacturacion: string;
    Estados: string;
}

/** Constants used to fill up our data base. */
const ESTADOS: string[] = [
    "Nueva",
    "Cerrada",
    "En tratamiento",
    "En tratamientoy"
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
    //displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
    displayedColumns: string[] = [
        "NFactura",
        "FecCreacion",
        "FecVencimiento",
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

    constructor(debitoClinicasService: DebitoClinicasService) {
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

    getColor(Estados) {
        switch (Estados) {
            case "Cerrada":
                return "#43A047";
            case "Nueva":
                return "#0353E5";
            case "En tratamiento":
                return "#F44336";
            case "En tratamientoy":
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
    const fecVencimiento = "20/01/2020";

    //return {
    //    id: id.toString(),
    //    name: name,
    //    progress: Math.round(Math.random() * 100).toString(),
    //    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    //};

    return {
        NFactura: id.toString(),
        FecCreacion: fecCreacion,
        FecVencimiento: fecVencimiento,
        Clinica: surnames,
        Prestador: name,
        ComFacturacion: Math.round(Math.random() * 100).toString(),
        Estados: ESTADOS[Math.round(Math.random() * (ESTADOS.length - 1))]
    };
}
