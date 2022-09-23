const boxes = document.querySelectorAll(".project-tile");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerPoint = (window.innerHeight / 6) * 3;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
