import { Component, OnInit } from '@angular/core';
import { SimplyBookService } from '../../helper/simply-book.service';

@Component({
    selector: 'app-home-demo-one',
    templateUrl: './home-demo-one.component.html',
    styleUrls: ['./home-demo-one.component.scss'],
})
export class HomeDemoOneComponent implements OnInit {
    companies: any[];

    constructor(private simplyBookService: SimplyBookService) {}

    ngOnInit(): void {
        this.simplyBookService.getCompanies().subscribe((data) => {
            this.companies = Object.values(data);
        });
    }
}
