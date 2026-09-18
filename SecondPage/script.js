let isScary = true;

function makeScary() {
    let cute = document.getElementById("cute");
    let scary = document.getElementById("scary");

    if (isScary == true) {
        cute.style.display = "block";
        scary.style.display = "none";
        isScary = false;
    } else {
        cute.style.display = "none";
        scary.style.display = "block";
        isScary = true;
    }
}