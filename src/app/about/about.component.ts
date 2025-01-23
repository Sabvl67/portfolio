import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DockModule, RadioButtonModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
    items: MenuItem[] | undefined;
  
    label: string | undefined;
    position: string = "right"
  
    ngOnInit() {
      this.items = [

        {
          label: 'Github',
          icon: '/github.svg',
          link: 'https://github.com/Sabvl67'
        },
        {
          label: 'Linkedin',
          icon: '/linkedin.svg',
          link: 'https://www.linkedin.com/in/qanh-vo/'
        },
        {
          label: 'Gmail',
          icon: '/gmail.svg',
          link: 'mailto:volequynhanh67@gmail.com'
        },
        {
          label: 'Discord',
          icon: '/discord.svg',
          link: 'https://discord.com/users/munjkin'
        },
      ];
    }

    openLink(link: string) {
      window.open(link, "_blank");
    }
  }
