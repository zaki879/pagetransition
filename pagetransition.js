document.addEventListener("DOMContentLoaded", function () {
  const mainwrap = document.querySelector(".main-wrapper");
  const pageTransition = document.querySelector(".new-page-transition");
  const pageTransitionItems = document.querySelectorAll(".hero-page-transition_item");

  // Check if elements exist on the page
  if (mainwrap && pageTransition && pageTransitionItems.length > 0) {
    // Initial page load animation
    const PageIn = gsap.timeline();
    PageIn
      .from(mainwrap, {
        y: "50vh",
        duration: 1.25,
        ease: "expo.inOut",
      })
      .to(pageTransitionItems, {
        y: "-100vh",
        duration: 2,
        ease: "expo.inOut",
        stagger: {
          amount: 0.1,
          from: "random",
        },
        onComplete: () => {
          pageTransition.style.display = "none";
        },
      }, '<');

    // Handle link clicks for navigation
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
      
          e.preventDefault(); // Prevent default navigation
          const destination = this.href; // Store the target URL

          // Reset styles to ensure a fresh start for the transition
          gsap.set(pageTransitionItems, { clearProps: "all" });

          // Show the transition
          pageTransition.style.display = "grid"; // Make sure the transition is visible

          // Create a new timeline for page exit animation
          const PageOut = gsap.timeline({
            onComplete: function () {
              window.location = destination; // Navigate to the new page after animation
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
        
      });
    });
  }
});
