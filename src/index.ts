const card = document.querySelector(".box") as HTMLDivElement;

const clientRect = card.getBoundingClientRect();

card.onmouseenter = function (e) {
  const w = clientRect.width;
  const h = clientRect.height;

  const x = (e.clientX - clientRect.left - w / 2) * (w > h ? h / w : 1);
  const y = (e.clientY - clientRect.top - h / 2) * (h > w ? w / h : 1);

  const direction =
    Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

  const directionNames = ["上", "右", "下", "左"];

  card.innerHTML = directionNames[direction];
};

card.onmouseout = function (e) {
  card.innerHTML = "";
};
