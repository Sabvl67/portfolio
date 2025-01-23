import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: ' /home', pathMatch: 'full'},
    { path: 'about', component: AboutComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'technology', component: TechnologyComponent},
    { path: 'projects', component: ProjectComponent},
    { path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
