export interface Question {
  title: string;
  answers: Answer[];
}

export interface Answer {
  title: string;
  value: number;
}

export const questions: Question[] = [
  {
    title: 'You\'ve been sitting in the doctor\'s waiting room for more than 25 minutes. You:',
    answers: [
      {title: 'Look at your watch every two minutes', value: -2},
      {title: 'Bubble with inner anger, but keep quiet', value: -1},
      {title: 'Explain to other equally impatient people in the room that the doctor is always running late', value: 1},
      {title: 'Complain in a loud voice, while tapping your foot impatiently', value: 2},
    ],
  },
  {
    title: 'You\'ve been sitting in the doctor\'s waiting room for more than 25 minutes. You:',
    answers: [
      {title: 'Look at your watch every two minutes', value: -2},
      {title: 'Bubble with inner anger, but keep quiet', value: -1},
      {title: 'Explain to other equally impatient people in the room that the doctor is always running late', value: 1},
      {title: 'Complain in a loud voice, while tapping your foot impatiently', value: 2},
    ],
  },
  {
    title: 'You\'ve been sitting in the doctor\'s waiting room for more than 25 minutes. You:',
    answers: [
      {title: 'Look at your watch every two minutes', value: -2},
      {title: 'Bubble with inner anger, but keep quiet', value: -1},
      {title: 'Explain to other equally impatient people in the room that the doctor is always running late', value: 1},
      {title: 'Complain in a loud voice, while tapping your foot impatiently', value: 2},
    ],
  },
];
