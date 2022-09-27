//사용자 id
export const joinResponse = {
  memberId: 1,
};

export const loginResponse = {
  memberId: 1,
};

export const modiUser = {
  memberId: 1,
};

export const myPageResponse = {
  memberId: 1,
  displayName: 'nuuco',
  email: 'kimcoding@gmail.com',
  questions: [
    {
      questionId: 100,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다.',
      body: '답변입니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 5,
    },
    {
      questionId: 101,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다.',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 7,
    },
    {
      questionId: 102,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다.',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 10,
    },
  ],
  answers: [
    {
      questionId: 151,
      answerId: 200,
      memberId: 1,
      displayName: 'kimcoding',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: true,
      createdAt: '2022-08-22',
    },
    {
      questionId: 155,
      answerId: 201,
      memberId: 1,
      displayName: 'kimcoding',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: false,
      createdAt: '2022-08-22',
    },
    {
      questionId: 122,
      answerId: 204,
      memberId: 1,
      displayName: 'kimcoding',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: false,
      createdAt: '2022-08-22',
    },
  ],
};

export const addQuestion = {
  questionId: 100,
};

export const reqQuestion = {
  question: {
    questionId: 100,
    memberId: 777,
    displayName: 'nuuco',
    title: '타이틀입니다.',
    body: '답변입니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
    createdAt: '2022-08-22',
    views: 5,
  },
  answers: [
    {
      questionId: 100,
      answerId: 200,
      memberId: 1,
      displayName: 'kimcoding',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: true,
      createdAt: '2022-08-22',
    },
    {
      questionId: 100,
      answerId: 201,
      memberId: 2,
      displayName: 'parkhacker',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: false,
      createdAt: '2022-08-22',
    },
    {
      questionId: 100,
      answerId: 204,
      memberId: 3,
      displayName: 'choichoi',
      body: '답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다. 답변입니다.',
      taken: false,
      createdAt: '2022-08-22',
    },
  ],
};

export const modiQuestion = {
  questionId: 100,
};

export const addAnswer = {
  answerId: 200,
};

export const modiAnswer = {
  answerId: 200,
};

export const takenAnswer = {
  answerId: 200,
};

export const pageQuestion = {
  questions: [
    {
      questionId: 100,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '답변입니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 5,
    },
    {
      questionId: 101,
      memberId: 2,
      displayName: 'parkhacker',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 7,
    },
    {
      questionId: 102,
      memberId: 3,
      displayName: 'choichoi',
      title:
        '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 10,
    },
    {
      questionId: 103,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '답변입니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 5,
    },
    {
      questionId: 104,
      memberId: 2,
      displayName: 'parkhacker',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 7,
    },
    {
      questionId: 105,
      memberId: 3,
      displayName: 'choichoi',
      title:
        '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 10,
    },
    {
      questionId: 106,
      memberId: 2,
      displayName: 'parkhacker',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 7,
    },
    {
      questionId: 107,
      memberId: 3,
      displayName: 'choichoi',
      title:
        '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 10,
    },
    {
      questionId: 108,
      memberId: 1,
      displayName: 'kimcoding',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '답변입니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 5,
    },
    {
      questionId: 109,
      memberId: 2,
      displayName: 'parkhacker',
      title: '타이틀입니다. 타이틀입니다. 타이틀입니다. 타이틀입니다. ',
      body: '궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다. 궁금합니다.',
      createdAt: '2022-08-22',
      views: 7,
    },
  ],
  pageInfo: {
    page: 1,
    size: 10,
    totalElements: 20,
    totalPages: 6,
  },
};
