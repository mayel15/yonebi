import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'fa-table-columns',
      title: 'Web & App Design',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-code',
      title: 'Développement Web & Mobile',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Maintenance IT',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-magnifying-glass',
      title: 'SEO',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-paintbrush',
      title: 'Logo & Design Graphique',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-bullhorn',
      title: 'Marketing Digital',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
  ] 

}
