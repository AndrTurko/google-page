window.addEventListener("load", () => {
  const appsButton = document.getElementById("apps-button");
  appsButton.addEventListener("click", () => {
    document.getElementsByClassName("popover")[0].classList.toggle("visible");
  });

  document.addEventListener("click", event => {
    const popover = document.getElementById("popover");
    if (!event.path.includes(popover) && event.target.id !== "apps-button")
      document.getElementById("popover").classList.remove("visible");
  });
});
