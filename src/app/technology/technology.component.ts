import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TechContent } from '../tech-content.model';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  activeSection: keyof TechContent = 'technology';
  techContent = 'technology';
  achievements= [
    'Codédex Summer Hackathon 2024 Winner',
    'Alberta Health Hacks 2024 Winner',
    'AI4Good Lab Accelerator 2023 Winner',
  ];
  certifications= [
    'Microsoft Certified: Azure Fundamentals',
    'Fintech Certificate - Fintech Cadence',
    'Amii Kickstart 2023',
  ];

  setActiveSection(section: keyof TechContent): void {
    this.activeSection = section;
  }

}
