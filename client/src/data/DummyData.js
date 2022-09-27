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

export const roomDetailData = {
  roomStatus: 'closed',
  roomData: {
    roomId: 1,
    roomName: 'room',
    dDay: '2022-09-15',
    restDay: 30,
    roomTheme: { number: 1, description: 'cats' },
    viewCount: 55,
    weather: 'sun',
    // weather: (sun, rain, snow, cloud),
    url: 'www.asdf.com',
    roobitAmount: 300,
  },
  roobits: {
    1: [
      {
        roobitId: 1,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '5C',
      },
      {
        roobitId: 2,
        nickname: 'kimcoding',
        body: '코딩은 즐거워용.',
        reception: 'to everyone',
        style: '2A',
      },
      {
        roobitId: 3,
        nickname: 'cococo',
        body: '가보자구요요!!!',
        reception: 'to everyone',
        style: '4B',
      },
      {
        roobitId: 4,
        nickname: 'GH',
        body: '안녕하세요',
        reception: 'to everyone',
        style: '2C',
      },
      {
        roobitId: 5,
        nickname: 'kimnuuco',
        body: '즐코합시당ㅇ.',
        reception: 'to GH',
        style: '4E',
      },
      {
        roobitId: 6,
        nickname: '가가가',
        body: '만나서 반갑습니다. 이건 보내는 글에 140자를 썼을 때 어느 정도 길이인지 알아보기 위한 글입니다. 그래서 아무 글이나 쓰고 있습니다..... 아무 말이나 쓸 겁니다. 오늘은 날씨가 춥네요 이제 가을인가 봅니다. 모두 감기 조심하세요. 건강이 최고!',
        reception: 'to everyone',
        style: '1F',
      },
      {
        roobitId: 7,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '3H',
      },
      {
        roobitId: 8,
        nickname: 'ㅎㅎ뇽',
        body: '아무말이나 쓸래용~~',
        reception: 'to GG',
        style: '2G',
      },
      {
        roobitId: 9,
        nickname: 'parkgogo',
        body: '고고고고고고고고고고',
        reception: 'to nuuco',
        style: '5E',
      },
      {
        roobitId: 10,
        nickname: 'AJR',
        body: '100가지의 나쁜 일들이 100가지의 좋은 이야기가 되고 그 100가지의 이야기들이 나를 흥미로운 사람으로 만들어줄거야.',
        reception: 'to everyone',
        style: '4H',
      },
    ],
    2: [
      {
        roobitId: 1,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '5C',
      },
      {
        roobitId: 2,
        nickname: 'kimcoding',
        body: '코딩은 즐거워용.',
        reception: 'to everyone',
        style: '2A',
      },
      {
        roobitId: 3,
        nickname: 'cococo',
        body: '가보자구요요!!!',
        reception: 'to everyone',
        style: '4B',
      },
      {
        roobitId: 4,
        nickname: 'GH',
        body: '안녕하세요',
        reception: 'to everyone',
        style: '2C',
      },
      {
        roobitId: 5,
        nickname: 'kimnuuco',
        body: '즐코합시당ㅇ.',
        reception: 'to GH',
        style: '4E',
      },
      {
        roobitId: 6,
        nickname: '가가가',
        body: '만나서 반갑습니다. 이건 보내는 글에 140자를 썼을 때 어느 정도 길이인지 알아보기 위한 글입니다. 그래서 아무 글이나 쓰고 있습니다..... 아무 말이나 쓸 겁니다. 오늘은 날씨가 춥네요 이제 가을인가 봅니다. 모두 감기 조심하세요. 건강이 최고!',
        reception: 'to everyone',
        style: '1F',
      },
      {
        roobitId: 7,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '3H',
      },
      {
        roobitId: 8,
        nickname: 'ㅎㅎ뇽',
        body: '아무말이나 쓸래용~~',
        reception: 'to GG',
        style: '2G',
      },
      {
        roobitId: 9,
        nickname: 'parkgogo',
        body: '고고고고고고고고고고',
        reception: 'to nuuco',
        style: '5E',
      },
      {
        roobitId: 10,
        nickname: 'AJR',
        body: '100가지의 나쁜 일들이 100가지의 좋은 이야기가 되고 그 100가지의 이야기들이 나를 흥미로운 사람으로 만들어줄거야.',
        reception: 'to everyone',
        style: '4H',
      },
    ],
    3: [
      {
        roobitId: 1,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '5C',
      },
      {
        roobitId: 2,
        nickname: 'kimcoding',
        body: '코딩은 즐거워용.',
        reception: 'to everyone',
        style: '2A',
      },
      {
        roobitId: 3,
        nickname: 'cococo',
        body: '가보자구요요!!!',
        reception: 'to everyone',
        style: '4B',
      },
      {
        roobitId: 4,
        nickname: 'GH',
        body: '안녕하세요',
        reception: 'to everyone',
        style: '2C',
      },
      {
        roobitId: 5,
        nickname: 'kimnuuco',
        body: '즐코합시당ㅇ.',
        reception: 'to GH',
        style: '4E',
      },
      {
        roobitId: 6,
        nickname: '가가가',
        body: '만나서 반갑습니다. 이건 보내는 글에 140자를 썼을 때 어느 정도 길이인지 알아보기 위한 글입니다. 그래서 아무 글이나 쓰고 있습니다..... 아무 말이나 쓸 겁니다. 오늘은 날씨가 춥네요 이제 가을인가 봅니다. 모두 감기 조심하세요. 건강이 최고!',
        reception: 'to everyone',
        style: '1F',
      },
      {
        roobitId: 7,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '3H',
      },
      {
        roobitId: 8,
        nickname: 'ㅎㅎ뇽',
        body: '아무말이나 쓸래용~~',
        reception: 'to GG',
        style: '2G',
      },
      {
        roobitId: 9,
        nickname: 'parkgogo',
        body: '고고고고고고고고고고',
        reception: 'to nuuco',
        style: '5E',
      },
      {
        roobitId: 10,
        nickname: 'AJR',
        body: '100가지의 나쁜 일들이 100가지의 좋은 이야기가 되고 그 100가지의 이야기들이 나를 흥미로운 사람으로 만들어줄거야.',
        reception: 'to everyone',
        style: '4H',
      },
    ],
    4: [
      {
        roobitId: 1,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '5C',
      },
      {
        roobitId: 2,
        nickname: 'kimcoding',
        body: '코딩은 즐거워용.',
        reception: 'to everyone',
        style: '2A',
      },
      {
        roobitId: 3,
        nickname: 'cococo',
        body: '가보자구요요!!!',
        reception: 'to everyone',
        style: '4B',
      },
      {
        roobitId: 4,
        nickname: 'GH',
        body: '안녕하세요',
        reception: 'to everyone',
        style: '2C',
      },
      {
        roobitId: 5,
        nickname: 'kimnuuco',
        body: '즐코합시당ㅇ.',
        reception: 'to GH',
        style: '4E',
      },
      {
        roobitId: 6,
        nickname: '가가가',
        body: '만나서 반갑습니다. 이건 보내는 글에 140자를 썼을 때 어느 정도 길이인지 알아보기 위한 글입니다. 그래서 아무 글이나 쓰고 있습니다..... 아무 말이나 쓸 겁니다. 오늘은 날씨가 춥네요 이제 가을인가 봅니다. 모두 감기 조심하세요. 건강이 최고!',
        reception: 'to everyone',
        style: '1F',
      },
      {
        roobitId: 7,
        nickname: '자바중독',
        body: '루빗을 140자까지 작성해보세요.',
        reception: 'to everyone',
        style: '3H',
      },
      {
        roobitId: 8,
        nickname: 'ㅎㅎ뇽',
        body: '아무말이나 쓸래용~~',
        reception: 'to GG',
        style: '2G',
      },
      {
        roobitId: 9,
        nickname: 'parkgogo',
        body: '고고고고고고고고고고',
        reception: 'to nuuco',
        style: '5E',
      },
      {
        roobitId: 10,
        nickname: 'AJR',
        body: '100가지의 나쁜 일들이 100가지의 좋은 이야기가 되고 그 100가지의 이야기들이 나를 흥미로운 사람으로 만들어줄거야.',
        reception: 'to everyone',
        style: '4H',
      },
    ],
  },
};
