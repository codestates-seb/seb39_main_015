/** 스타일 코드에 따라 루빗 스타일 값을 숫자로 변환하는 함수 : type-자세 style-무늬 */
export const getRoobitType = (typeStr) => {
  let [all, type, style] = typeStr.match(/^([\d]+)([\D]+)$/);
  //각 코드를 숫자로 변경
  type = Number(type) - 1;
  style = style.toUpperCase().charCodeAt(0) - 65;
  return { all, type, style };
};
