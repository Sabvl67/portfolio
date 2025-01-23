import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ProductService } from '../product.service';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    link?: string;
    status?: string;
    category?: string;
    image?: string;
    rating?: number;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RadioButtonModule, TooltipModule, CommonModule, CarouselModule, ButtonModule, TagModule, DialogModule],
  providers: [ProductService],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit{

   
    products: Product[] = [];
    responsiveOptions: any[] | undefined;

    visible: boolean = false;
    selectedProduct: Product | null = null;
    displayDialog: boolean = false;

    constructor(private productService: ProductService) {}
    
    openLink(link: string) {
        window.open(link, '_blank');
    }

    showDialog() {
        this.visible = true;
    }
    closeDialog(): void {
        this.displayDialog = false;
        this.selectedProduct = null;
      }

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        if (status.includes('Winner')) {
            return 'success';
        }
        switch (status) {
            case 'Machine Learning':
                return 'warning';
            default:
                return 'info';
        }
    }
}