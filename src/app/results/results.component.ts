import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  testResult = 'Introvert';
  isTimeWentOut = false;

  constructor(private router: Router) {
    const extrasState = this.router.getCurrentNavigation()?.extras.state;

    const result = extrasState?.['result'] ?? 0;
    this.testResult = result === 0 ? 'Ambivert' : result < 0 ? 'Introvert' : 'Extravert';

    this.isTimeWentOut = extrasState?.['isTimeWentOut'] ?? false;
  }
}
