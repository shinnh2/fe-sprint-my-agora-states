// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
//console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  //1. avatarWrapper - 아바타 이미지 영역 div.discussion__avatar--wrapper
 //innerHTML=`<img src="${obj.avatarUrl}" alt="avatar of ${obj.author}">`;
  let elAvatarImg=document.createElement('img');
  elAvatarImg.setAttribute('src',obj.avatarUrl);
  elAvatarImg.setAttribute('alt',`avatar of ${obj.author}`);
  avatarWrapper.append(elAvatarImg);
  
  //2. discussionContent - 내용 영역 div.discussion__content
  //innerHTML=`<h2 class="discussion__title"><a href="${obj.url}">${obj.title}</a></h2>`;
  let elTitle=document.createElement('h3');
  let elTitleLink=document.createElement('a');
  elTitle.className="discussion__title";
  elTitleLink.setAttribute('href',obj.url);
  elTitleLink.textContent=obj.title;
  elTitle.appendChild(elTitleLink);
  discussionContent.append(elTitle);
  //`<div class="discussion__information">${obj.author} / ${obj.createdAt}</div>`;
  let elInfo=document.createElement('div');
  elInfo.className="discussion__information";
  elInfo.textContent=`${obj.author} / ${obj.createdAt}`;
  discussionContent.append(elInfo);

  //3. 질문여부 삽입
  let elAnswerChk=document.createElement('i');
  elAnswerChk.className='material-icons disChecked';
  elAnswerChk.textContent='check_box_outline_blank';
  discussionAnswered.append(elAnswerChk);


  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

