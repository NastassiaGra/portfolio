window.addEventListener("load", function() {
    var plusButton = document.getElementsByClassName("btn-plus");
    for ( var i = 0; i < plusButton.length; i++) {
        plusButton[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.height === "fit-content"){
                content.style.height = "90px";
                this.style.top = "25%";
            } else {
                content.style.height = "fit-content";
                this.style.top = "10%";
            }
        });
    }
});
