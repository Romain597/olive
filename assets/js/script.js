window.onload = () => {
    // map
    var mymap = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    // menu mobile
    document.getElementById("menu-mobile").addEventListener("click", () => {
        let mobileIcon = document.getElementById("menu-mobile");
        let menuMobile = document.getElementById("menu");
        if(window.innerWidth<700) {
            if(mobileIcon.classList.contains("menu-burger-active")) {
                mobileIcon.classList.remove("menu-burger-active");
                menuMobile.style.display = "none";
            }
            else {
                mobileIcon.classList.add("menu-burger-active");
                menuMobile.style.display = "block";
            }
        }
    });
    // resize fen
    window.onresize = () => {
        let mobileIcon = document.getElementById("menu-mobile");
        let menuMobile = document.getElementById("menu");
        if(window.innerWidth<=700) {
            mobileIcon.classList.remove("menu-burger-active");
            mobileIcon.style.display = "block";
            menuMobile.style.display = "none";
        }
        else {
            mobileIcon.classList.remove("menu-burger-active");
            mobileIcon.style.display = "none";
            menuMobile.style.display = "block";
        }
    }
};