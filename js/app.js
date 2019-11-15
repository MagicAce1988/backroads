// ******* set date ****************

const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// toggle navbar

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// add event listener

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.classList.remove("show-links");
  });
});
//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     window.scroll({
//       left: 0,
//       top: element.offsetTop - 62,
//       behavior: "smooth"
//     });
//     document.body.scrollTop = element.offsetTop - 62;
//   });
// });

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  if (eID == "about" && window.innerWidth <= 300) {
    var y = elm.offsetTop + 62;
  }
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID) - 62;
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 1200);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 300);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}
