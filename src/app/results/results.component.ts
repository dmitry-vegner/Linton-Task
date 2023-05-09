import { Component, OnInit } from '@angular/core';

import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  testResult = 'Introvert';

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.testResult = this.resultsService.getResult() < 0 ?
      'Introvert' : this.resultsService.getResult() === 0 ?
      'Ambivert' : 'Extravert';
  }
}
