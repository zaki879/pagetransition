document.addEventListener("DOMContentLoaded", function () {
  const mainwrap = document.querySelector(".main-wrapper");
  const pageTransition = document.querySelector(".new-page-transition");
  const pageTransitionItems = document.querySelectorAll(".hero-page-transition_item");

  // Only run the animation if these elements exist
  if (mainwrap && pageTransition && pageTransitionItems.length > 0) {
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
        if (
          this.hostname === window.location.hostname &&
          this.href.indexOf("#") === -1 &&
          this.getAttribute("target") !== "_blank"
        ) {
          e.preventDefault();
          let destination = this.href;

          // Show the transition
          pageTransition.style.display = "grid";

          // Animate the transition
          gsap.fromTo(
            pageTransitionItems,
            {
              y: "0vh",
            },
            {
              y: "100vh",
              duration: 0.5,
              ease: "expo.inOut",
              stagger: {
                amount: 0.1,
                from: "random",
              },
              onComplete: () => {
                console.log('====================================');
                console.log(destination);
                console.log('====================================');
                window.location = destination;
              },
            }
          );
        }
      });
    });
  }
});
