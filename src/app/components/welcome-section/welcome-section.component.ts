import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent {
  title: string | undefined = "Creer, innover, prospérer : ensemble.";
  subTitle: string | undefined = "Vous aider à démarrer, développer et gérer votre business en ligne";

  constructor() {}
}
