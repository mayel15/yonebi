import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projectImage: string | undefined;
  @Input() projectName: string | undefined;
  @Input() projectLink: string | undefined;
}
