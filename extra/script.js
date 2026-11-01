
const navbar = document.querySelector(".navbar");
const links = navbar.querySelectorAll("a");

function moveIndicator(link) {
    const navRect = navbar.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const left = linkRect.left - navRect.left;

    navbar.style.setProperty("--indicator-left", `${left}px`);
    navbar.style.setProperty("--indicator-width", `${linkRect.width}px`);
}

// Set the initial indicator position
const initialLink = navbar.querySelector(".active");

if (initialLink) {
    moveIndicator(initialLink);
}

// Update the active link when clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");
        moveIndicator(link);
    });
});

// Keep the indicator aligned after resizing
window.addEventListener("resize", () => {
    const activeLink = navbar.querySelector(".active");

    if (activeLink) {
        moveIndicator(activeLink);
    }
});



/* SECTION 4: SIDEBAR INTERACTIONS */

const sidebarGroups = document.querySelectorAll(".side-group");

sidebarGroups.forEach(group => {
    const toggle = group.querySelector(".side-toggle");

    toggle.addEventListener("click", () => {
        const isOpen = group.classList.toggle("open");

        toggle.setAttribute("aria-expanded", String(isOpen));
    });
});

// Highlight the clicked sidebar link
const sidebarLinks = document.querySelectorAll(
    ".sidebar .side-link, .sidebar .submenu a"
);

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".sidebar .side-link").forEach(item => {
            item.classList.remove("selected");
        });

        document.querySelectorAll(".sidebar .submenu a").forEach(item => {
            item.style.color = "";
        });

        if (link.classList.contains("side-link")) {
            link.classList.add("selected");
        } else {
            link.style.color = "#55d6ff";
        }
    });
});
