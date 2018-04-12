function toggleSidecar() {
    var bod = document.getElementById("body");
    if (bod.classList.contains("mobile-nav-open")) {
        bod.classList.remove("mobile-nav-open");
    } else {
        bod.classList.add("mobile-nav-open");
    }
}

$(window).resize(function () {
    var bod = document.getElementById("body");
    if (window.innerWidth <= 850) {
        if (!bod.classList.contains("force-mobile-nav")) {
            bod.classList.add("force-mobile-nav");
        }
    } else {
        if (bod.classList.contains("force-mobile-nav")) {
            bod.classList.remove("force-mobile-nav");
        }
    }
});

$(document).ready(function () {
    var sidecarToggles = document.querySelectorAll(".mobile-nav-toggle, .body-overlay");
    for (var i = 0; i < sidecarToggles.length; i++) {
        sidecarToggles[i].addEventListener("click", function (event) {
            var bod = document.getElementById("body");
            if (bod.classList.contains("mobile-nav-open")) {
                bod.classList.remove("mobile-nav-open");
            } else {
                bod.classList.add("mobile-nav-open");
            }
        });
    }
    var folderToggles = document.getElementsByClassName("folder-toggle");
    for (var i = 0; i < folderToggles.length; i++) {
        folderToggles[i].addEventListener("click", function (event) {
            if (event.target.classList.contains("active")) {
                event.target.classList.remove("active");
            } else {
                event.target.classList.add("active");
            }
        });
    }
    if (document.getElementById("folderNav")) {
        document.getElementById("folderNav").addEventListener("click", function () {
            if (folderNav.classList.contains("expanded")) {
                folderNav.classList.remove("expanded");
            } else {
                folderNav.classList.add("expanded");
            }
        });
    }
});