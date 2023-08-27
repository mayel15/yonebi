import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent {
  title: string | undefined = "Sites Web uniques et conçus par des professionnels, livrés avec soin, passion et précision";
  subTitle: string | undefined = "Vous aider à démarrer, développer et gérer et gérer votre business en ligne";

  constructor() {}
}
