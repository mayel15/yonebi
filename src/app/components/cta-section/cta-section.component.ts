import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {
  ctaText: string | undefined = `Petit ou gros budget, tech.yonebi. peut créer le site Web parfait pour vous ou votre entreprise.
  Besoin d'une solution de commerce électronique, conception graphique et logo, optimisation des moteurs de recherche, courrier électronique
  support marketing ou site Web ? tech.yonebi.  peut également vous aider !`
}
