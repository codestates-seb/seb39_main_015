<h1>📮 Roobits</h1>
<div  align="center">
  <img width="40%" src="https://user-images.githubusercontent.com/89282099/201780692-70b79718-b6cb-4935-ad74-afb14c9ad0db.svg" alt="roobits">
</div>
</br>
<h3 align="center">💌 당신의 특별한 하루(D-day)를 위한 단 하나뿐인 게시판, Roobits!</h3>

- **팀 명 :**  Team Roobits
- **프로젝트 명 :** Roobits(루비츠)
- **프로젝트 기간 :** 2022.09.07 - 2022.10.12
- **한줄 소개 :** 사람들과 함께 D-day에 보여줄 비밀 메시지를 작성할 수 있는 게시판 서비스
- **팀원 :** 전광현(팀장), 이유진, 조현화, 유하경, 염빛나리
- **발표 문서 :** [💁🏻 Roobits 노션 발표 문서](https://www.notion.so/codestates/Roobits-2a698f57f0224b79a417eac587921a0b)
- **배포 링크 :** [📮 roobits.com](http://roobits.com/)

## 🛫 Intro
> 🥲 비대면 시대, 만나기 힘든 우리… 그렇지만 특별한 날에는 모두와 추억을 남기고 싶어! 
> 동고동락한 사람들에게 메시지를 전할 공간이 없을까?

- ✍️ 특별한 날을 **D-day로 정하고** 사람들과 함께 **비밀 메시지** 남기세요.   
- 💌 **D-day에 공개**되는 메시지들이 추억을 더 특별하게 만들어줍니다.    
- ❗️보낸 메시지는 **D-day 단 하루만 볼 수 있어요!** D-day가 지나면 룸이 닫히니까 서두르세요.


## 👨‍👩‍👧‍👦 Team
| 전광현<br>(FE, 팀장) | 이유진<br>(FE) | 조현화<br>(BE) | 유하경<br>(BE) | 염빛나리<br>(BE) |
| :---: | :---: | :---: | :---: | :---: |
| <img alt="전광현" src="https://avatars.githubusercontent.com/u/73211553?v=4" height="100" width="100"> | <img alt="이유진" src="https://avatars.githubusercontent.com/u/89282099?v=4" height="100" width="100"> | <img alt="조현화" src="https://avatars.githubusercontent.com/u/104138036?v=4" height="100" width="100"> | <img alt="유하경" src="https://avatars.githubusercontent.com/u/76886589?v=4" height="100" width="100"> | <img alt="염빛나리" src="https://avatars.githubusercontent.com/u/103120984?v=4" height="100" width="100"> |
| [@GH](https://github.com/Gwanghyun-Jeon) |    [@nuuco](https://github.com/nuuco) | [@CHOHYUNHWA](https://github.com/CHOHYUNHWA) | [@EstelleYU](https://github.com/EstelleYU) | [@bytenari](https://github.com/bytenari) |
|<p style="font-size:12px;width:103px;" align="left">- 로그인 등 인증 처리<br/>- 메인 페이지<br/>- 마이룸 페이지<br/>- 메세지 조회 및 검색<br/>- 배포, 도메인 적용 (S3, Route53)</p>|<p style="font-size:12px;width:103px;" align="left">- 디자인 담당 <br/>- 유저 플로우 작성 <br/>- 룸 페이지 <br/>- 룸 종료 페이지 <br/>- 룸 생성 모달 <br/>- 루빗 생성 모달 <br/>- 기타 반응형 작업 </p>|<p style="font-size:12px;width:103px;" align="left">- 회원 CRUD<br/>- 구글 로그인<br/>- 이메일 중복체크<br/>- 유효 e-mail 체크<br/>- ID/비밀번호 찾기<br/>- 토큰을 이용한 인증<br/>- AWS(EC2,RDS) 배포환경 구축</p>|<p style="font-size:12px;width:103px;" align="left">- 루빗 CRUD 기능 <br/>- D-day 전/후/당일 각각 다른 API 구현 <br/>- 관리자 기능 일부 (조회, 삭제) 구현 <br/>- 룸에서 루빗 관련 조회 기능 구현 </p>|<p style="font-size:12px;width:103px;" align="left">- 룸 CRUD 기능<br/>- 룸 관련 제한 기능<br/>- 날씨 외부 API</p>|


### 커뮤니케이션 방식
- 매일 13:30 부터 17:30 사이에는 온라인 상태를 유지합니다.
- 매일 13시30분에는 진행된 개발에 대한 간단한 브리핑을 진행합니다. 이슈가 없다면 빠르게 끝냅니다.
- 자료 공유, 회의 등과 같은 모든 소통은 디스코드를 이용하고 급한 경우에만 카카오톡을 이용합니다.

### 

## 📺 Demo
![anigif](https://user-images.githubusercontent.com/76886589/195051770-6c55f0af-2212-41f6-b014-0325b18c321d.gif?raw=true)


## ✨Pages & Features
|메인 페이지|로그인 / 회원가입 페이지|
|:---:|:---:|
|<img width="100%" alt="첫 화면 gif" src="https://user-images.githubusercontent.com/89282099/201865342-cf84ffc7-b05e-4d0b-82cd-c6acb17b983d.gif"/>|<img width="100%" alt="로그인 gif" src="https://user-images.githubusercontent.com/89282099/201867817-3740ac91-8b82-46c8-848a-5cc325a349f2.gif"/>|
|**마이 룸 페이지**|**룸 페이지**|
|<img width="100%" alt="마이 룸 생성 gif" src="https://user-images.githubusercontent.com/89282099/201868596-423ca88c-9764-4490-8878-29fb5455e123.gif"/>|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201869090-0cb68614-11e7-4aeb-be0f-e563203e58c2.gif"/>|
|**날씨API 활용한 배경 변화**|**시간대별 하늘 변화**|
|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201870211-cd6bd086-f794-49c3-bd60-6c851a08b3c9.gif"/>|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201927685-4748db01-df77-4507-9eec-ec1e1a17c915.gif"/>|
|**루빗(메시지) 생성하기**|**D-day 루빗(메시지) 열람 & 검색**|
|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201930288-f914ef2f-5d4e-4e65-825e-78cb14f2102e.gif"/>|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201932385-6f061340-085b-469b-8d39-91f7bd5ef072.gif"/>|
|**룸 종료 페이지(D-day 이후)**|**유효하지 않은 룸 페이지**|
|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201934365-b0c0fee4-4915-4e9d-ad61-f2d030c7f227.png"/>|<img width="100%" src="https://user-images.githubusercontent.com/89282099/201934412-dccf5c1a-ded9-48a3-af9c-5176d465a2a4.png"/>|

## ➡️ User flow
<img width="2800" alt="💎 루비츠 User Flow" src="https://user-images.githubusercontent.com/89282099/201778837-ddddd37c-9c2e-4ce1-b6f2-1968f3654a72.png">

## 🔧 Skills
![Roobits Stack (9)](https://user-images.githubusercontent.com/73211553/195057855-ab580645-ecc4-43dd-b423-a1dd09b5bfcc.png)

### Tools
| Git | Github | Discord |
| :---: | :---: | :---: |
| <img alt="git logo" src="https://git-scm.com/images/logos/logomark-orange@2x.png" width="65" height="65" > | <img alt="github logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="65" height="65"> | <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece7_3437c10597c1526c3dbd98c737c2bcae.svg" height="65" width="65"> |
### Front-end
| Html | JavaScript | React | Styled-<br>Components | esLint | Prettier |
| :---: | :---: | :---: | :---: | :---: | :---: |
| <img alt="Html" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/440px-HTML5_logo_and_wordmark.svg.png" width="65" height="65" /> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="75" height="75" /></div> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://styled-components.com/logo.png" alt="styled-components icon" width="65" height="65" /> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /></div> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /></div> |

### Back-end
| Java | mySQL | Rest | AWS | Spring | Spring<br>Boot |
| :---: | :---: | :---: | :---: | :---: | :---: |
| <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/java-icon.svg" alt="icon" width="65" height="65" /></div> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /></div> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /></div> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="icon" width="65" height="65" /></div> | <img alt="spring logo" src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" height="50" width="50" > | <img alt="spring-boot logo" src="https://t1.daumcdn.net/cfile/tistory/27034D4F58E660F616" width="65" height="65" > |
<br/>

## 🌲 Git
### Branch
- `main` : 서비스 운영 브랜치입니다.
- `dev` : 개발 환경 브랜치입니다. 개별적으로 작업했던 내용을 합치고 검토합니다.
- `feat/fe(or be)/...` : 프론트(백엔드) 세부 브랜치입니다.
### Commit & Pull-Request Message
| "feat: ~ " | 새로운 기능 추가 |
| :---: | :--- |
| "fix: ~ " | 버그 수정 |
| "design: ~ " | css와 같은 UI 수정 |
| "docs: ~ " | 문서 수정 (ex. README.md) |
| "remove: ~ " | 파일을 삭제만 한 경우 |
