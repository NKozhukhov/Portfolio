let iconBx = document.querySelectorAll(".icon-box");
let contentBx = document.querySelectorAll(".content-box");

for (let i = 0; i < iconBx.length; i++) {
  iconBx[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "content-box";
    }
    document.getElementById(this.dataset.id).className = "content-box active";

    for (let i = 0; i < iconBx.length; i++) {
      iconBx[i].className = "icon-box";
    }
    this.className = "icon-box active";
  });
}