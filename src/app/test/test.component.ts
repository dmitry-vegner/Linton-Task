import { FormArray, FormControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { Question, questions } from './questions-interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  questions: Question[] = questions;
  form: FormArray;
  private result: number = 0;

  readonly INIT_TIMER_VALUE = 60;
  timer: number = 60;
  private interval: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const answerValues = questions.map(({answers}) => answers.at(0)?.value ?? -2);
    this.calcResult(answerValues);

    this.form = new FormArray(answerValues.map(value => new FormControl(value)));
    this.form.valueChanges.pipe(tap((values: number[]) => this.calcResult(values))).subscribe();

    this.initTimeout();
  }

  goToResults(step: number): void {
    if (step === this.questions.length - 1) {
      this.router.navigate(['/results'], {state: {result: this.result}});
    }
  }

  ngOnDestroy(): void {
    this.destroyTimeout();
  }

  private calcResult(answerValues: number[]): void {
    this.result = answerValues.reduce((acc, cur) => acc + cur, 0);
  }

  private initTimeout(): void {
    this.interval = window.setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.destroyTimeout();
        this.router.navigate(['/results'], {state: {
          result: this.result,
          isTimeWentOut: true,
        }});
      }
    }, 1e3);
  }

  private destroyTimeout(): void {
    this.timer = this.INIT_TIMER_VALUE;

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

}
