import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.css']
})
export class WhyUsSectionComponent {
  args = [
    {
      icon: 'fa-table-columns',
      title: 'Abordable',
      description: 'Nous proposons des options de tarification bon marché et abordables et nous travaillerons sur votre projet quel que soit votre budget, grand ou petit.'
    },
    {
      icon: 'fa-magnifying-glass',
      title: 'SEO performant',
      description: 'Votre site est construit dans un souci de référencement. Les moteurs de recherche indexeront votre site Web et vous aideront à atteindre tous les clients et téléspectateurs potentiels.'
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Optimisé sur Mobile',
      description: 'Nous proposons des options de tarification bon marché et abordables et nous travaillerons sur votre projet quel que soit votre budget, grand ou petit.'
    },
    {
      icon: 'fa-certificate',
      title: 'Ecperiences',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-face-smile',
      title: 'Logo & Design Graphique',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Service Client Exceptionnel',
      description: 'Obtenez un site Web personnalisé, optimisé pour le référencement et optimisé pour les mobiles, créé pour vous ou votre entreprise aux prix les plus bas et livré en un rien de temps.'
    },
  ] 
}
