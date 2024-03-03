import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface FormData {
  firstName: string;
  lastName: string;
  emailAdress: string;
}

@Component({
  selector: 'app-delete-gpma-user-data',
  templateUrl: './delete-gpma-user-data.component.html',
  styleUrls: ['./delete-gpma-user-data.component.css']
})
export class DeleteGpmaUserDataComponent {
  name: string | undefined = '';
  formData: FormData = {
    firstName: '',
    lastName: '',
    emailAdress: '',
  }


  constructor(private readonly http: HttpClient) { }

  submitForm() {
    const apiUrl = 'https://tech-yonebi-back.vercel.app/api/delete-user-data-form';
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
            emailAdress: '',
          };
          alert('Votre demande de suppression des données a été bien envoyée et sera traitée dans les plus brefs delais ! :)');
          window.location.href = '/';
        }
        
      })
      .catch(error => {
        console.log('erreur : ', error);
      });
  }

}
