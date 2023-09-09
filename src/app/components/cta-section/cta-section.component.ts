import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {
  ctaText: string | undefined = `Petit ou gros budget, Yonebi peut créer la solution digitale parfaite pour vous ou votre entreprise.
  Besoin d'une application web ou mobile, d'un e-commerce, de conception graphique et logo, de SEO, ou bien juste de consulting IT ? Yonebi  
  peut également vous aider !`
}
