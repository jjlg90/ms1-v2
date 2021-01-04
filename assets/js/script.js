const header = document.querySelector(".header");

$(".js-scroll-trigger").click(function () {
                $(".navbar-collapse").collapse("hide");
            });
            
window.onscroll = function() {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add("active")
    }else{
        header.classList.remove("active");
    }

}
