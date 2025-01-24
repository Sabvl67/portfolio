import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectComponent } from './project/project.component';
import { TechnologyComponent } from './technology/technology.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectComponent, ButtonModule, NavBarComponent, TechnologyComponent, AboutComponent, ContactComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
