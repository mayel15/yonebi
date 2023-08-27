import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() serviceIcon: string | undefined;
  @Input() serviceTitle: string | undefined;
  @Input() serviceDescription: string | undefined;
  shouldAddClass: boolean = true;


  /*document.getElementByClass('fa-solid').add: any*/
}
