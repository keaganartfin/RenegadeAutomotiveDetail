import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';


declare let $: any;



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;

    constructor(
        private router: Router,
        private titleService: Title,
        private metaService: Meta,
        private activatedRoute: ActivatedRoute
      ) {}



    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
            $('.preloader').fadeIn('slow');
          }
        });

        this.routerSubscription = this.router.events
          .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
          .subscribe(event => {
            this.activatedRoute.data.subscribe(data => {
              this.titleService.setTitle(data.title);
              this.metaService.updateTag({ name: 'description', content: data.description });
              this.metaService.updateTag({ name: 'keywords', content: data.keywords });
            });

            $.getScript('../assets/js/custom.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
              return;
            }
            window.scrollTo(0, 0);
          });
      }

}
