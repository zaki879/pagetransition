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
  }, '<');

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const linkHref = this.getAttribute("href");

    // Exclude links that match the specific href
    if (
      linkHref.includes("?4ba01cff_page=") || // Exclude links with ?ed3610c8_page query
      this.hostname !== window.location.hostname ||
      linkHref.indexOf("#") !== -1 ||
      this.getAttribute("target") === "_blank"
    ) {
      return; // Do nothing for excluded links
    }

    e.preventDefault();
    let destination = this.href;
    pageTransition.style.display = "grid";
    PageIn.fromTo(
      pageTransitionItems,
      {
        y: "100vh",
      },
      {
        y: "0vh",
        duration: 0.7,
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
