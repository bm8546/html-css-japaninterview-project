document.addEventListener("DOMContentLoaded", () => {
  // 인터뷰 토픽 토글 열고 닫기
  const toggleBtn = document.querySelector(".topics-toggle");
  const list = document.querySelector(".interview-topics ul");

  toggleBtn.addEventListener("click", () => {
    list.classList.toggle("show");

    if (list.classList.contains("show")) {
      toggleBtn.textContent = "목차 닫기 ▲";
    } else {
      toggleBtn.textContent = "목차 보기 ▼";
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
});
