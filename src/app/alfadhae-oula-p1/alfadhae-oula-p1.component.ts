import { Component } from '@angular/core';

@Component({
  selector: 'app-alfadhae-oula-p1',
  templateUrl: './alfadhae-oula-p1.component.html',
  styleUrls: ['./alfadhae-oula-p1.component.css']
})
export class AlfadhaeOulaP1Component {
  constructor() { }

  ngOnInit(): void { }

  checkQuiz(questions: NodeListOf<HTMLInputElement>, correctionsContainer: HTMLElement) {
    const correctAnswers = [true, false, true, false, false, true, true];
    const userAnswers = Array.from(questions).map((input, index) => input.checked === correctAnswers[index]);
    
    const corrections = userAnswers.map((isCorrect, index) => {
      return `<div>Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}</div>`;
    }).join('');

    correctionsContainer.innerHTML = corrections;
  }
}
