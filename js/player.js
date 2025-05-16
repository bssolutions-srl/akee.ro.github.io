let isExpanded = false;

function toggleIframeHeight() {
  const iframe = document.getElementById("myIframe");
  const extend_button = document.querySelector(".extend_button");

  if (isExpanded) {
    iframe.style.height = "80px"; // original height
    extend_button.innerHTML='<img src="./img/up.png">'
} else {
    iframe.style.height = "50vh"; // expanded height (or any other value)
    extend_button.innerHTML='<img src="./img/down.png">'
}

  isExpanded = !isExpanded;
}
