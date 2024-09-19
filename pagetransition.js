document.addEventListener("DOMContentLoaded", function () {
  const mainwrap = document.querySelector(".main-wrapper");
  const pageTransition = document.querySelector(".new-page-transition");
  const pageTransitionItems = document.querySelectorAll(".hero-page-transition_item");

  if (mainwrap && pageTransition && pageTransitionItems.length > 0) {
    // Page load animation (initial entrance)
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

    // Handle link clicks
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (
          this.hostname === window.location.hostname &&
          this.href.indexOf("#") === -1 &&
          this.getAttribute("target") !== "_blank"
        ) {
          e.preventDefault(); // Prevent default navigation
          const destination = this.href; // Store the target URL

          // Reset the pageTransition display and items
          pageTransition.style.display = "grid"; // Make sure the transition is visible

          // Create a new timeline for the page exit animation
          const PageOut = gsap.timeline({
            onComplete: function () {
              window.location = destination; // Navigate to the new page when animation is done
            }
          });

          // Animate the page out (exit)
          PageOut
            .fromTo(
              pageTransitionItems,
              { y: "100vh" }, // Initial position (off-screen)
              {
                y: "0vh", // Move into view
                duration: 1,
                ease: "expo.inOut",
                stagger: {
                  amount: 0.1,
                  from: "random",
                }
              }
            );
        }
      });
    });
  }
});
