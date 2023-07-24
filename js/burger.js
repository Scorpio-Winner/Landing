(() => {
    "use strict";

    function menuInit() {
        if (document.querySelector(".icon-menu")) {
            document.addEventListener("click", (e) => {
                document.documentElement.classList.toggle("menu-open");
            });
        }
    }
    menuInit();
})();
