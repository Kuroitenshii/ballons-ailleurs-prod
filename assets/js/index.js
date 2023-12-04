$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
    $(".navbar-link").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        const prevActive = $(".has-dropdown.is-active")
        const newActive = $(this).closest(".has-dropdown")
        if(prevActive[0] != undefined && prevActive[0] != newActive[0]){
            prevActive.toggleClass("is-active");
        }
        newActive.toggleClass("is-active");
  
    });
  });