/** 받는 사람이 있으며 true, 없으면 false 를 리턴하는 함수 */
export const haveTo = (reception) => {
  if (reception !== 'to everyone') {
    return true;
  }
  return false;
};
