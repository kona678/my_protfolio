function navbar(){
    const nav = document.getElementById("navbar");
    const nav_toggler = document.getElementById("nav-toggler");
    if(nav.style.display === "none"){
        nav.style.display = "flex";
    }else{
        nav.style.display = "none";
        nav_toggler.checked = false;
    }

}
