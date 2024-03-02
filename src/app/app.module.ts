import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { InformativeSectionComponent } from './components/informative-section/informative-section.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PortofolioSectionComponent } from './components/portofolio-section/portofolio-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { WhyUsCardComponent } from './components/why-us-card/why-us-card.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DeleteGpmaUserDataComponent } from './components/delete-gpma-user-data/delete-gpma-user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarSectionComponent,
    WelcomeSectionComponent,
    CtaButtonComponent,
    InformativeSectionComponent,
    TitleSectionComponent,
    ServicesSectionComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    PortofolioSectionComponent,
    TestimonialsSectionComponent,
    TestimonialCardComponent,
    WhyUsSectionComponent,
    WhyUsCardComponent,
    CtaSectionComponent,
    FooterSectionComponent,
    ContactFormComponent,
    HomePageComponent,
    ContactPageComponent,
    DeleteGpmaUserDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{provide: HttpClient, useValue: HttpClient}],
  bootstrap: [AppComponent]
})
export class AppModule { }
