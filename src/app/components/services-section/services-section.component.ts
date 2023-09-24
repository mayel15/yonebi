import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'fa-paintbrush',
      title: 'Design',
      description: "Procurez vous d'un logo, un design graphique ou un ui/ux design de vos sites et applications, afin d'améliorer votre branding."
    },
    {
      icon: 'fa-code',
      title: 'Développement Web',
      description: 'Obtenez un site ou application web sur mesure, optimisé pour les appareils mobiles, à des tarifs très avantageux et livré rapidement.'
    },
    {
      icon: 'fa-mobile-screen-button',
      title: 'Développement Mobile',
      description: 'Transformez votre idée en application mobile cross platform, iOS & Android, accessible à une audience diversifiée d\'utilisateurs.'
    },
    {
      icon: 'fa-cart-shopping',
      title: 'E-commerce',
      description: 'Vendez des produits en ligne ou recevez des dons depuis votre site. Gérez les commandes et les stocks. Acceptez les paiements par carte de crédit ou mobile money.'
    },
    {
      icon: 'fa-magnifying-glass',
      title: 'SEO',
      description: 'Améliorez le référencement de votre entreprise sur Google, Yahoo, Bing et plus de 100 moteurs de recherche, afin que tous vos clients et futurs clients puissent vous trouver facilement en ligne.'
    },
    {
      icon: 'fa-chalkboard-user',
      title: 'Consulting IT',
      description: 'Nous accompagnons les entreprises en les conseillant dans l\'éléboration d\'une stratégie IT efficace.'
    },
  ] 

}
