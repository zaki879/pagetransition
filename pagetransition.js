const pageTransition = document.querySelector(".new-page-transition");
const pageTransitionItems = document.querySelectorAll(
  ".new-page-transition_item"
);

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      this.hostname === window.location.hostname &&
      this.href.indexOf("#") === -1 &&
      this.getAttribute("target") !== "_blank"
    )
      e.preventDefault();
    let destination = this.href;
    pageTransition.style.display = "grid";
    gsap.fromTo(
      pageTransitionItems,
      {
        y: "100vh",
      },
      {
        y: "Ovh",
        duration: 1,
        ease: "expo.inOut",
        stagger: {
          amount: 0.1,
          from: "random",
        },
        onComplete: () => {
          window.location = destination;
        },
      }
    );
  });
});
