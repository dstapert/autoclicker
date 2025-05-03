document.querySelectorAll(".collapsible").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    if (content) {
      btn.classList.toggle("active");
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});