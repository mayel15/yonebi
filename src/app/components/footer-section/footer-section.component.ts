import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {
  aboutUsDescription: string | undefined = `Broke And Abroad
  Broke and Abroad c’est Mariam, Junior et Steven, trois amis globe-trotters et ensemble, on a décidé de 
  lancer une plateforme avec une mission :Rendre le monde du voyage plus accessible aux publics oubliés par les acteurs 
  traditionnels du tourisme en te proposant les meilleurs bons plans voyage (Comme par exemple Chypre vol et hôtel pour 40€ oui oui on l'a déjà fait.)`;
  copyrightText: string | undefined = `tech.yonebi. © ${new Date().getFullYear()} | Tous droits réservés`
}
