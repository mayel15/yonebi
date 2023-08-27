import { Component } from '@angular/core';

@Component({
  selector: 'app-informative-section',
  templateUrl: './informative-section.component.html',
  styleUrls: ['./informative-section.component.css']
})
export class InformativeSectionComponent {
  informationsText: string  | undefined = `Nous sommes spécialisés dans les sites Web réactifs, conçus et développés sur mesure, optimisés pour le référencement.
  Nous proposons également des services de commerce électronique, de référencement, de marketing par courrier électronique, de conception graphique et bien plus encore.
  Nous travaillons avec des clients de toutes tailles, allant des particuliers aux grandes entreprises.`
}
