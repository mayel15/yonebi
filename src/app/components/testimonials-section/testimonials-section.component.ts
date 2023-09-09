import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {
    testimonials = [
      {
        text: `Je tiens à exprimer ma profonde satisfaction envers Yonebi pour le site web exceptionnel qu'ils ont créé pour moi. En tant qu'entrepreneur, je cherchais un partenaire de confiance pour donner vie à ma vision en ligne, et Yonebi a totalement dépassé mes attentes.
        Dès le début, leur équipe a démontré une compréhension profonde de mes besoins et de ma niche de marché. Ils ont suivi un processus transparent et professionnel tout au long du projet, en tenant compte de mes commentaires et de mes idées. Le résultat final est un site web magnifique, réactif et convivial, qui représente parfaitement mon entreprise.`,
        author: 'Emmanuel Martin - Entrepreneur '
      }
    ]
}
