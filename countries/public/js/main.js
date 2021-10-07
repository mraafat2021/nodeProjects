const darkLight = document.getElementById("dark-light");
const regions = document.getElementById("regions");
const back = document.getElementById("back");
const search = document.getElementById("search");

if (localStorage.getItem("view") !== null)
    document.body.classList.add(localStorage.getItem("view"));

darkLight.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("view", "light");
    } else {
        localStorage.setItem("view", "dark");
    }
    document.body.classList.toggle("dark");
});

if (regions != null) {
    regions.addEventListener("change", () => {
        const region = regions.value;
        window.open(region, "_blank");
        //window.location.href = region;
    });
}

if (back != null) {
    back.addEventListener("click", () => {
        window.history.back();
    });
}

if (search != null) {
    search.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (search.value !== "") {
                window.location.href = `/search/${search.value}`;
                search.value == "yes";
            }
        }
    });
}