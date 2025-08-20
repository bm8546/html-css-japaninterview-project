document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const tocBtn = document.getElementById("tocBtn");
  const tocListContainer = document.getElementById("tocListContainer");
  const article = document.querySelector("article.interview-contents");

  // 1. scrollTopBtn: 위로 스크롤
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 2. tocBtn 클릭 시 토글
  tocBtn.addEventListener("click", () => {
    const icon = tocBtn.querySelector("i");
    const isVisible = tocListContainer.style.display === "block";

    if (isVisible) {
      tocListContainer.style.display = "none";
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      tocListContainer.style.display = "block";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });

  // 3. article 안의 figure 태그 모아서 TOC 생성
  const figures = article.querySelectorAll("figure");
  if (figures.length > 0) {
    const ul = document.createElement("ul");

    figures.forEach((fig) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      // data-title 있으면 그걸, 없으면 텍스트 내용 사용
      const title = fig.dataset.title || fig.textContent.trim();

      a.textContent = title;
      a.href = `#${fig.id}`; // figure의 id로 이동

      li.appendChild(a);
      ul.appendChild(li);
    });

    tocListContainer.appendChild(ul);
  }
});
