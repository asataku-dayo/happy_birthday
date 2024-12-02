let count = 100;

document.querySelector("#click").onclick = function () {
  count -= 10;
  if (count >= 0) {
    let p = document.querySelector(".line");
    console.log(p);
    p.style.height = `${count}%`;
    if (count == 10) {
      document.querySelector(".fi").style.visibility = `visible`;
    }

    if (count == 0) {
      jQuery(".a").fadeOut(1000);
      jQuery(".modal").fadeIn(4000);
    }
  }
};

document.querySelector(".bb").onclick = function () {
  jQuery(".modal").fadeOut(1000);
  jQuery(".a").fadeIn(4000);
};
