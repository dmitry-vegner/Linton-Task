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
    title: 'You\'re really busy at work and a colleague is telling you their life story and personal woes. You:',
    answers: [
      {
        title: 'Don\'t dare to interrupt them',
        value: -2,
      },
      {
        title: 'Think it\'s more important to give them some of your time; work can wait',
        value: -1,
      },
      {
        title: 'Listen, but with only with half an ear',
        value: 1,
      },
      {
        title: 'Interrupt and explain that you are really busy at the moment',
        value: 2,
      }
    ]
  },
  {
    title: 'You\'ve been sitting in the doctor\'s waiting room for more than 25 minutes. You:',
    answers: [
      {
        title: 'Look at your watch every two minutes',
        value: -2,
      },
      {
        title: 'Bubble with inner anger, but keep quiet',
        value: -1,
      },
      {
        title: 'Explain to other equally impatient people in the room that the doctor is always running late',
        value: 1,
      },
      {
        title: 'Complain in a loud voice, while tapping your foot impatiently',
        value: 2,
      }
    ]
  },
  {
    title: 'You\'re having an animated discussion with a colleague regarding a project that you\'re in charge of. You:',
    answers: [
      {
        title: 'Don\'t dare contradict them',
        value: -2,
      },
      {
        title: 'Think that they are obviously right',
        value: -1,
      },
      {
        title: 'Defend your own point of view, tooth and nail',
        value: 1,
      },
      {
        title: 'Continuously interrupt your colleague',
        value: 2,
      }
    ]
  }
];
