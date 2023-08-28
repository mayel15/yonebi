import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {
    testimonials = [
      {
        text: "The team at BN Designs are not just web designers and developers, but top-notched experts in web design and development, who always put the interest of the client first. With cutting-edge results, they help clients stand out in the crowded world of the world wide web and in today's competitive market. I am extremely pleased with their services.",
        author: 'Marco LeRoc - Author, Speaker, and Founder Marco LeRoc & Co.'
      }
    ]
}
