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
        onComplete: () => {
          pageTransitionItems.style.display = "none";

        },      }, '<');
  
    const links = document.querySelectorAll(".nav_menu_link");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
       
          let destination = this.href;

          // Show the transition
          pageTransition.style.display = "grid";

          // Animate the transition
          gsap.fromTo(
            pageTransitionItems,
            {
              y: "100vh",
            },
            {
              y: "0vh",
              duration: 2,
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
        
      });
    });
  }
});
