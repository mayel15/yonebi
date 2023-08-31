import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAdress: string;
  interestedIn: string[] | null;
  projectTimeframe: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string | undefined = '';
  interestedInChckboxes = [
    { label: 'Web & App Design', checked: false },
    { label: 'Développement Web & Mobile', checked: false },
    { label: 'Maintenance IT', checked: false },
    { label: 'SEO', checked: false },
    { label: 'Logo & Design Graphique', checked: false },
    { label: 'Marketing Digital', checked: false },
  ];
  formData: FormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAdress: '',
    interestedIn: [],
    projectTimeframe: '',
    message: '',
  }


  constructor(private readonly http: HttpClient) { }

  updateSelectedCheckboxes() {
    const selectedCheckboxes = this.interestedInChckboxes.filter(item => item.checked).map(item => item.label);
    console.log('Cases cochées :', selectedCheckboxes);
    this.formData.interestedIn = selectedCheckboxes;
    return selectedCheckboxes;
  }



  submitForm() {
    const apiUrl = 'https://tech-yonebi-back.vercel.app/api/contact';
    console.log('hello');
    console.log(this.formData);
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'an important field is empty !') {
          alert('Un des champs du formulaire est vide ! :(');
        } else {
          console.log('Réponse de l\'API:', data);
          this.formData = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAdress: '',
            interestedIn: [],
            projectTimeframe: '',
            message: '',
          };
          alert('Votre message a été bien envoyé ! :)');
          window.location.href = '/';
        }
        
      })
      .catch(error => {
        console.log('erreur : ', error);
      });
  }

}
