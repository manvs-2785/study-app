import { Component, OnInit } from "@angular/core";

@Component( {
    selector: 'app-server-warning',
    templateUrl: './warning.component.html', 
    styleUrls: ['./warning.component.css']
})

export class WarningComponent implements OnInit {
    warnUserName : String = "EmptyName";
    isUpdated : boolean = false;
    constructor() {

    }
    ngOnInit() {

    }
    onClick = () => {
        this.warnUserName = "Static Name";
        this.isUpdated = true;
    }
}