import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-us-card',
  templateUrl: './why-us-card.component.html',
  styleUrls: ['./why-us-card.component.css']
})
export class WhyUsCardComponent {
  @Input() argIcon: string | undefined;
  @Input() argTitle: string | undefined;
  @Input() argDescription: string | undefined;
  shouldAddClass: boolean = true;
}
