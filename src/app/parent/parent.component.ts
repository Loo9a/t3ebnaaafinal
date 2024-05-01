import { Component } from '@angular/core';
import { EleveService } from '../Services/eleve.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  formData: any = {};
  formSubmissions: any[] = [];
  isFormVisible: boolean = true;

  constructor(private eleveService: EleveService) {}

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    this.eleveService.createEleve(this.formData).subscribe(
      (response) => {
        console.log('Form data submitted successfully:', response);
        this.formSubmissions.push({...this.formData});
        this.formData = {}; // Clear form data
      },
      (error) => {
        console.error('Error submitting form data:', error);
        // Handle error if needed
      }
    );
  }
}
