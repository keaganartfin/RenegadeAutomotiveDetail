import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TosComponent } from './components/pages/tos/tos.component';
import { LearningComponent } from './components/pages/learning/learning.component';

const routes: Routes = [
    {
        path: '',
        component: HomeDemoOneComponent,
        data: {
            title: 'Renegade Automotive Detailing - Home',
            description:
                'Renegade Automotive Detailing offers premium car detailing services in Plainfield, IL.',
            keywords: 'car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'Renegade Automotive Detailing - About',
            description:
                'Learn more about Renegade Automotive Detailing and our commitment to quality car detailing services in Plainfield, IL.',
            keywords:
                'about, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'appointment',
        component: AppointmentComponent,
        data: {
            title: 'Renegade Automotive Detailing - Book an Appointment',
            description:
                'Book your next car detailing appointment with Renegade Automotive Detailing in Plainfield, IL.',
            keywords:
                'appointment, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'pricing',
        component: PricingComponent,
        data: {
            title: 'Renegade Automotive Detailing - Pricing',
            description:
                'Check out our competitive pricing for car detailing services at Renegade Automotive Detailing in Plainfield, IL.',
            keywords:
                'pricing, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: {
            title: 'Renegade Automotive Detailing - FAQ',
            description:
                'Get answers to frequently asked questions about our car detailing services at Renegade Automotive Detailing in Plainfield, IL.',
            keywords: 'FAQ, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            title: 'Renegade Automotive Detailing - Contact',
            description:
                'Get in touch with Renegade Automotive Detailing in Plainfield, IL for any inquiries or concerns.',
            keywords:
                'contact, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'tos',
        component: TosComponent,
        data: {
            title: 'Renegade Automotive Detailing - Terms of Service',
            description:
                'Read the terms of service for Renegade Automotive Detailing in Plainfield, IL.',
            keywords:
                'terms of service, car detailing, Plainfield IL, automotive detailing',
        },
    },
    {
        path: 'learning',
        component: LearningComponent,
        data: {
            title: 'Renegade Automotive Detailing - Learning Center',
            description:
                'Explore our learning center to gain knowledge on car detailing and maintenance.',
            keywords:
                'learning center, car detailing, Plainfield IL, automotive detailing, maintenance',
        },
    },
    // Here add new pages component

    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Renegade Automotive Detailing - Page Not Found',
            description:
                'The page you are looking for cannot be found. Please check the URL and try again.',
            keywords:
                'page not found, car detailing, Plainfield IL, automotive detailing',
        },
    }, // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            relativeLinkResolution: 'legacy',
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
