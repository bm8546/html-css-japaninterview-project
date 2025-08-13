document.addEventListener("DOMContentLoaded", () => {
  // 인터뷰 토픽 토글 열고 닫기
  const toggleBtn = document.querySelector(".topics-toggle");
  const list = document.querySelector(".interview-topics ul");

  toggleBtn.addEventListener("click", () => {
    list.classList.toggle("show");

    if (list.classList.contains("show")) {
      toggleBtn.textContent = "目次を閉じる ▲";
    } else {
      toggleBtn.textContent = "目次を開く ▼";
    }
  });

  // 플로팅 버튼 스크롤 이벤트 등록
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 플로팅 버튼 - 목록
  const tocBtn = document.getElementById("tocBtn");
  const tocListContainer = document.getElementById("tocListContainer");

  // 아이콘 클래스명
  const barsIconClass = "fa-bars";
  const closeIconClass = "fa-xmark";

  tocBtn.addEventListener("click", function () {
    const icon = tocBtn.querySelector("i");

    if (tocListContainer.style.display === "none") {
      // 목록 보이기
      tocListContainer.style.display = "block";

      // 아이콘 바꾸기 (bars → xmark)
      icon.classList.remove(barsIconClass);
      icon.classList.add(closeIconClass);

      // 목록 초기화 및 생성
      createFigureList(tocListContainer);
    } else {
      // 목록 숨기기
      tocListContainer.style.display = "none";

      // 아이콘 원복 (xmark → bars)
      icon.classList.remove(closeIconClass);
      icon.classList.add(barsIconClass);
    }
  });

  // figure 목록 생성 함수
  function createFigureList(container) {
    // 기존 내용 비우기
    container.innerHTML = "";

    const figures = document.querySelectorAll("figure");
    if (figures.length === 0) {
      container.textContent = "목록이 없습니다.";
      return;
    }

    const ul = document.createElement("ul");

    figures.forEach((fig, index) => {
      // 각 figure 내에 제목 또는 간단한 텍스트를 추출 (예: figcaption 또는 첫 번째 텍스트)
      let title = "";
      const caption = fig.querySelector("figcaption");
      if (caption && caption.textContent.trim() !== "") {
        title = caption.textContent.trim();
      } else {
        // fig 내 텍스트를 조금 잘라서 제목으로 사용 (없으면 'Figure {index+1}')
        title =
          fig.textContent.trim().substring(0, 30) || `Figure ${index + 1}`;
      }

      const li = document.createElement("li");
      li.textContent = title;
      li.style.userSelect = "none";

      // 클릭 시 해당 figure로 스크롤
      li.addEventListener("click", () => {
        fig.scrollIntoView({ behavior: "smooth" });
        // 목록 숨기기 및 아이콘 원복
        tocListContainer.style.display = "none";
        const icon = tocBtn.querySelector("i");
        icon.classList.remove(closeIconClass);
        icon.classList.add(barsIconClass);
      });

      ul.appendChild(li);
    });

    container.appendChild(ul);
  }
});
