import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProductsData() {
        return [
            {
                name: 'Family Bloom',
                description: 'Custom dashboards for each family member featuring tailored content, progress updates, and reminders related to their role in the FFT process.',
                image: 'assets/familybloom.png',
                link: 'https://github.com/Sabvl67/FamilyBloom',
                status: 'Hackathon Winner',
            },
            {
                name: 'Plate Pal',
                description: 'PlatePal is a pioneering initiative designed to assist low-income individuals, including students and workers, in acquiring groceries more efficiently.',
                image: 'assets/food.jpg',
                link: 'https://github.com/Sabvl67/PlatePal',
                status: 'Accelerator Winner',
            },
            {
                name: 'Rat Spike Count Generator',
                description: 'Generative Adversarial Network (GAN) for generating synthetic spike count patterns using TensorFlow and Keras.',
                image: 'assets/brain.jpg',
                link: 'https://github.com/Sabvl67/Rat-Spike-Count-Generator',
                status: 'Machine Learning',
            },
            {
                name: 'Olympic Predictor',
                description: 'Predict the winner of the 2024 Olympic Games by analyzing medal counts from the Tokyo 2021 Olympics.',
                image: 'assets/olympic.jpg',
                link: 'https://github.com/Sabvl67/Olympic-Predictor',
                status: 'Hackathon Winner',
            },
            {
                name: 'Text Based Game',
                description: 'Your ultimate goal is to rescue the wise man, imprisoned in a mysterious cage, who holds the key to saving the country.',
                image: 'assets/knight.jpg',
                link: 'https://github.com/Sabvl67/Text-based-game',
                status: 'C++',
            },
            {
                name: 'Portfolio',
                description: 'A portfolio project built with Angular, TypeScript, and PrimeNG components, showcasing my learning experience and development skills.',
                image: 'assets/portfolio.png',
                link: 'https://github.com/Sabvl67/new-portfolio',
                status: 'Angular',
            },
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
}