import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio-section',
  templateUrl: './portofolio-section.component.html',
  styleUrls: ['./portofolio-section.component.css']
})
export class PortofolioSectionComponent {
  projects = [
    /*{
      image: '/assets/images/by-ndeyaa-project.png',
      name: 'By Ndeyaa',
      link: 'https://mayel15.github.io/by-ndeyaa/',
    },*/
    {
      image: '/assets/images/share-yonebi-project.png',
      name: 'Share Yonebi',
      link: 'https://yonebi-front.vercel.app/'
    },
    {
      image: '/assets/images/tech-yonebi-project.png',
      name: 'Yonebi',
      link: '/',
    }
  ]
}
