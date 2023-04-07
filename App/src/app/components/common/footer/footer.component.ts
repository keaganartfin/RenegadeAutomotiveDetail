import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor(private datePipe: DatePipe) {}
    currentYear: any;

    ngOnInit() {
        const currentDate = new Date();
        this.currentYear = this.datePipe.transform(currentDate, 'yyyy');
    }
}
