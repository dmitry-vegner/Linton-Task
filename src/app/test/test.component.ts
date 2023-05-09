import { FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { Question, questions } from './questions-interface';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  questions: Question[] = questions;
  form: FormArray;
  private result: number = 0;

  constructor(
    private router: Router,
    private resultsService: ResultsService) {}

  ngOnInit(): void {
    const answerValues = questions.map(({answers}) => answers.at(0)?.value ?? -2);
    this.calcResult(answerValues);
    this.resultsService.setResult(this.result);

    this.form = new FormArray(answerValues.map(value => new FormControl(value)));
    this.form.valueChanges.pipe(tap((values: number[]) => this.calcResult(values))).subscribe();
  }

  goToResults(step: number): void {
    if (step !== this.questions.length - 1) {
      return;
    }

    this.resultsService.setResult(this.result);
    this.router.navigate(['/results']);
  }

  private calcResult(answerValues: number[]): void {
    this.result = answerValues.reduce((acc, cur) => acc + cur, 0);
  }

}
