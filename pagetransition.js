const mainwrap = document.querySelector(".main-wrapper");
const pageTransition = document.querySelector(".new-page-transition");
const pageTransitionItems = document.querySelectorAll(".hero-page-transition_item");

const PageIn = gsap.timeline();
PageIn
  .from(mainwrap, {
    y: "50vh",
    duration: 1.25,
    ease: "expo.inOut",
  })
  .to(pageTransitionItems, {
    y: "-100vh",
    duration: 1,
    ease: "expo.inOut",
    stagger: {
      amount: 0.1,
      from: "random",
    },
  },'<');

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Allow transition for all links except _blank and same-page hashes
    if (
      this.hostname === window.location.hostname &&
      !this.href.includes("#") && // Remove this condition if you want hash links to also trigger
      this.getAttribute("target") !== "_blank"
    ) {
      e.preventDefault();
      let destination = this.href;

      // Trigger page transition animation
      pageTransition.style.display = "grid";
      PageIn.fromTo(
        pageTransitionItems,
        {
          y: "100vh",
        },
        {
          y: "0vh",
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
    }
  });
});
