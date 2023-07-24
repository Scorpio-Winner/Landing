(() => {
    "use strict";

    let bodyLockStatus = false; // Изначально скролл не блокирован

    let bodyLockToggle = (delay = 500) => {
        if (bodyLockStatus) bodyUnlock(delay);
        else bodyLock(delay);
    };

    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }, delay);
            bodyLockStatus = false;
        }
    };

    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (!bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = true;
        }
    };

    function menuInit() {
        if (document.querySelector(".icon-menu")) {
            document.addEventListener("click", (e) => {
                if (e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            });
        }
    }

    // Обработчик события прокрутки для блокировки скролла
    window.addEventListener("scroll", () => {
        if (bodyLockStatus) {
            window.scrollTo(0, 0);
        }
    });

    menuInit();
})();
