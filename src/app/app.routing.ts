import { environment } from '../environments/environment';
import { Route, RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routesConfig: Routes = [

    {
        path: 'kontakt-i-lokalizacja', component: ContactComponent
    },
    {
        path: 'uslugi-i-cennik', component: ServicesComponent
    },
    {
        path: '**', component: HomeComponent
    }

]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: environment.enableTracing
})