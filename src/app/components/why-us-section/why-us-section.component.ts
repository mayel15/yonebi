import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.css']
})
export class WhyUsSectionComponent {
  args = [
    {
      icon: 'fa-dollar-sign',
      title: 'Abordable',
      description: 'Nous proposons des options de tarification bon marché et abordables et nous travaillerons sur votre projet quel que soit votre budget, grand ou petit.'
    },
    {
      icon: 'fa-magnifying-glass',
      title: 'SEO performant',
      description: 'Votre site est construit dans un souci de référencement. Les moteurs de recherche indexeront votre site Web et vous aideront à atteindre tous les potentiels clients.'
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Optimisé sur Mobile',
      description: "Tablettes. Ordinateurs portables. Téléphones. Votre site sera entièrement réactif et s'adaptera parfaitement et aura un aspect formidable sur n'importe quel appareil."
    },
    {
      icon: 'fa-certificate',
      title: 'Expertise',
      description: 'Nous nous basons sur un expertise de +5 ans en matière de développement. Ainsi, votre projet sera entre de bonnes main pour décoller.'
    },
    {
      icon: 'fa-lock',
      title: 'Sécurité et fiabilité',
      description: 'La sécurité de vos données et de votre présence en ligne fait parti de nos priorités. Nous utilisons les technologies appropriées et les meilleures pratiques en matière de sécurité pour garantir la protection de vos données.'
    },
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Service Client Exceptionnel',
      description: 'Un support client inégalé 24h/24, 7j/7. Vous bénéficierez de temps de réponse rapides afin que vos problèmes soient pris en charge avec la plus haute priorité.'
    },
  ] 
}
