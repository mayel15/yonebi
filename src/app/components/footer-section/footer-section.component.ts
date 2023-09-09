import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {
  aboutUsDescription: string | undefined = `
  Yonebi est une entreprise de services numériques, offrant une gamme complète de solutions digitales allant de la conception au 
  développement. L'objectif est d'accompagner les clients, petits ou grands, à transformer leur projets/idées, en réalité.
  Leur permettant ainsi de développer et gérer facilement leur business en ligne.`;
  copyrightText: string | undefined = `yonebi. © ${new Date().getFullYear()} | Tous droits réservés`
}
