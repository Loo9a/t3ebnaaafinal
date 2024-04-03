import { Component } from '@angular/core';
import { SingupService } from '../Services/singup.service';
import { Compte } from '../Model/Compte';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  singup: Compte = new Compte();

  constructor(private sinupService: SingupService) { }

  onSubmit(): void {
      this.sinupService.adduser(this.singup)

      .subscribe(
        response => {
          console.log('details', this.singup);
          console.log('Inscription réussie ! Réponse du serveur : ', response);
        },
        error => {
          console.error('Erreur lors de linscription : ', error);
          let errorMessage = 'Une erreur sest produite lors de linscription. Veuillez réessayer.';
          if (error.status === 0) {
            errorMessage = 'Impossible de contacter le serveur. Veuillez vérifier votre connexion Internet.';
          } else if (error.error && error.error.message) {
            errorMessage = error.error.message; 
          }
          alert(errorMessage);
        }
      );
      }
}


