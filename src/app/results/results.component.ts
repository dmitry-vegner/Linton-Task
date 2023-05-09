import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  testResult = 'Introvert';

  constructor(private router: Router) {
    const result = this.router.getCurrentNavigation()?.extras.state?.['result'] ?? 0;
    this.testResult = result === 0 ? 'Ambivert' : result < 0 ? 'Introvert' : 'Extravert';
  }
}
