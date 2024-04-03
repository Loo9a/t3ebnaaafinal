import { Component } from '@angular/core';

@Component({
  selector: 'app-alzaman-oula',
  templateUrl: './alzaman-oula.component.html',
  styleUrls: ['./alzaman-oula.component.css']
})
export class AlzamanOulaComponent {

  // Define an array to hold checkbox data
  checkboxes: { label: string, checked: boolean, result: string }[] = [
    { label: 'إستغرق ربيع مدة زمنية أقصر من أصدقائه من أجل الوصول إلى المدرسة', checked: false, result: '' },
    { label: 'إستغرق ربيع مدة زمنية أطول من أصدقائه من أجل الوصول إلى المدرسة', checked: false, result: '' },
    { label: 'إستغرق الأصدقاء مدة زمنية أطول من ربيع من أجل الوصول إلى المدرسة', checked: false, result: '' },
    { label: 'إستغرق الأصدقاء مدة زمنية أقصر من ربيع من أجل الوصول إلى المدرسة', checked: false, result: '' }
  ];

  constructor() {
    // Verify inputs and display result
    this.checkboxes.forEach((checkbox, index) => {
      if (index === 0 || index === 2) {
        checkbox.checked = true; // Mark the first and third checkboxes as correct
        checkbox.result = "Correct"; // Display correct below the question
      } else {
        checkbox.checked = false; // Mark other checkboxes as false
        checkbox.result = "False"; // Display false below the question
      }
    });
  }
}
