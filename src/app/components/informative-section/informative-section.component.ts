import { Component } from '@angular/core';

@Component({
  selector: 'app-informative-section',
  templateUrl: './informative-section.component.html',
  styleUrls: ['./informative-section.component.css']
})
export class InformativeSectionComponent {
  informationsText: string  | undefined = `Avec une expertise transcendant le web, nous vous fournissons la technologie qui s'aligne parfaitement avec vos objectifs.
  Allant des Applications Web & Mobiles au SEO, nos services sont là pour faire décoller votre projet, que vous soyez un particulier ou une entité.`
}
