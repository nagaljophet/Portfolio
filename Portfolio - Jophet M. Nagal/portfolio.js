let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

let sidemenu = document.getElementById("sidemenu")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("actives");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("actives");
    }
    event.currentTarget.classList.add("actives");
    document.getElementById(tabname).classList.add("actives")
}

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}


