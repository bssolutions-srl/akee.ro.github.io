let isExpanded = false;

function toggleIframeHeight() {
  const iframe = document.getElementById("myIframe");
  const extend_button = document.querySelector(".extend_button");

  if (!isExpanded) {
    iframe.style.height = "80px"; // original height
    extend_button.innerHTML='<img src="./img/up.png">';
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
} else {
    iframe.style.height = "70vh"; // expanded height (or any other value)
    extend_button.innerHTML='<img src="./img/down.png">'
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

  isExpanded = !isExpanded;
}
