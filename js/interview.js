document.addEventListener("DOMContentLoaded", () => {
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
});
